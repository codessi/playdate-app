// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc,
  getFirestore,
  query,
  where,
  onSnapshot,
  updateDoc,
} from "firebase/firestore"
import { useEffect } from "react"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdG-S9fZ1a10sVpftNrpDrktK9vvJUIvI",
  authDomain: "play-date-d39ce.firebaseapp.com",
  projectId: "play-date-d39ce",
  storageBucket: "play-date-d39ce.appspot.com",
  messagingSenderId: "666386506329",
  appId: "1:666386506329:web:13cf836b9350f193440748",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()

export const addUser = async (user) => {
  await setDoc(doc(db, "users", user.name), user)
}

// export const addDetails = async(user) => {
//     await setDoc(doc(db, "users", user.name),{})
// }

export const addDetails = async (user, details) => {
  const docRef = doc(db, "users", user.name.toLowerCase())
  await updateDoc(docRef, {
    details,
  })
}
// export const addDetail = async (user, details) => {
//   const docRef = doc(db, "users", user.name.toLowerCase())
//   await updateDoc(docRef, 
//     details,
//   )
// }

// export const changeAllDoc = async () => {
//   const q = query(collection(db, "users"))

//   const querySnapshot = await getDocs(q)
//   querySnapshot.forEach(async(doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data())
//     await addDetail(doc.data(),{playOn: false})
//   })
// }

// what's the plan..... get collection
// check to see if  to see data
// include in the list.js and invoke on render
//
// first try the time update
/* 
resetScore(): Promise<void> {
  return this.usersCollectionRef.ref.get().then(resp => {
    console.log(resp.docs)
    let batch = this.afs.firestore.batch();

    resp.docs.forEach(userDocRef => {
      batch.update(userDocRef.ref, {'score': 0, 'leadsWithSalesWin': 0, 'leadsReported': 0});
    })
    batch.commit().catch(err => console.error(err));
  }).catch(error => console.error(error))
}


*/