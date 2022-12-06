import { useContext, useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
import { PlayContext } from "../context/PlayContext"
import { Link } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"

import { updateDoc, doc } from "firebase/firestore"
import { db } from "../utils/firebase/firebase.utils"
import DetailFormModal from "../components/DetailFormModal"

const OnOff = () => {
  // const [play, setPlay] = useState(false)
  const { user, setUser } = useContext(PlayContext)
  const { playOn, name } = user
  const { documents, error } = useCollection("users")

  const [showDetailFormModal, setShowDetailFormModal] = useState(false)

  useEffect(() => {
    const userDb = documents?.find(
      (document) => document.name === user.name.toLowerCase()
    )
    userDb && setUser(userDb)
  }, [])

  const handlePlayOn = async () => {
    

    const docRef = doc(db, "users", name.toLowerCase())
    await updateDoc(docRef, {
      playOn: true,
    })
    
    setUser({ ...user, playOn: true })
  }
  const handlePlayOff = async () => {
   

    const docRef = doc(db, "users", name.toLowerCase())
    await updateDoc(docRef, {
      playOn: false,
    }) 
    setUser({ ...user, playOn: false })
  }


  return (
    // container
    <div className=" h-screen flex flex-col justify-center items-center relative">
      <div>
        <div className="flex flex-col items-center ">
          <div className=" text-center mb-2">&nbsp; HELLO !</div>
          <div className="mb-8  text-center flex items-center justify-center">
            {playOn && (
              <span onClick={handlePlayOff} className="w-5 h-5 inline-block mr-1 bg-green-500 border rounded-full"></span>
            )}
            {!playOn && (
              <span onClick={handlePlayOn} className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>
            )}
            {name.toUpperCase()}
          </div>
        </div>
        {!playOn && (
          <button
            className="border w-48 h-48 rounded-full drop-shadow shadow-orange-300"
            onClick={handlePlayOn}
          >
            READY TO PLAY
          </button>
        )}
        {playOn && (
          <button
            className="border w-48 h-48 rounded-full drop-shadow shadow-orange-300"
            onClick={handlePlayOff}
          >
            {" "}
            DONE PLAYING{" "}
          </button>
        )}
      </div>
      <button
        onClick={() => setShowDetailFormModal(true)}
        className="underline mt-5 relative"
        to="/list"
      >
        ADD DETAILS (Optional )
      </button>

      {showDetailFormModal && <DetailFormModal setShowDetailFormModal={setShowDetailFormModal}/>}

      <Link className="underline mt-5" to="/list">
        SEE ALL FRIENDS
      </Link>
    </div>
  )
}

export default OnOff
