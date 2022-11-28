// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, addDoc, getFirestore } from "firebase/firestore"

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
    const docRef = await addDoc(collection(db, "users"), {
        name: {user},
        playOn: true
    })
    console.log("Document written with ID: ", docRef.id)
}
