import { collection, query,  onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase/firebase.utils";
import { useEffect, useState } from "react";

export const useCollection = () => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    const q = query(collection(db, "users"))
    useEffect(() => {
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const users = []
            querySnapshot.forEach((doc) => {
                users.push(doc.data())
            })
            // console.log("all the kids: ", users.join(", "))
            // console.log(users)
            setDocuments(users)
        },  (error) => {
            console.log(error.message)
            setError("could not fetch the data")
          })
        return unsubscribe
    }, [])

    return {documents, error}
}
