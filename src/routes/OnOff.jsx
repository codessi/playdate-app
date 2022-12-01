import { useContext, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { PlayContext } from "../context/PlayContext"
import { Link } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"

import { updateDoc, doc } from "firebase/firestore"
import { db } from "../utils/firebase/firebase.utils"

const OnOff = () => {
  // const [play, setPlay] = useState(false)
  const { user, setUser } = useContext(PlayContext)
  const { playOn, name } = user
  const {documents, error}=useCollection("users")
  console.log(documents)

  // const userDb = documents?.find(document =>  document.name === user.name.toLowerCase())
  // console.log(userDb)


 useEffect(() => {
  
  const userDb = documents?.find(document =>  document.name === user.name.toLowerCase())
   userDb && setUser(userDb)

 }, [])
 

  const handlePlayOn = async () => {

    setUser({...user, playOn: true})

    const docRef = doc(db, "users", name)
    await updateDoc(docRef, {
      playOn: true,
    })

  }
  const handlePlayOff = async () => {

    setUser({...user, playOn: false})

    const docRef = doc(db, "users", name)
    await updateDoc(docRef, {
      playOn: false,
    })
  }

  return (
    // container
    <div className=" h-screen flex flex-col justify-center items-center">
      <div>
        <div className="flex flex-col items-center ">
          <div className=" text-center mb-2">&nbsp; HELLO !</div>
          <div className="mb-8  text-center flex items-center justify-center">
            {playOn && (
              <span className="w-5 h-5 inline-block mr-1 bg-green-500 border rounded-full"></span>
            )}
            {!playOn && (
              <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>
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
      <Link className="underline mt-5" to="/list">
        SEE ALL FRIENDS
      </Link>
    </div>
  )
}

export default OnOff