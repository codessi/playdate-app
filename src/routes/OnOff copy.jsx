import { useContext  } from "react"
// import { useNavigate } from "react-router-dom"
import { PlayContext } from "../context/PlayContext"
import { Link } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"

const OnOff = () => {
  // const [play, setPlay] = useState(false)
  const { name, play, setPlay } = useContext(PlayContext)
  // const navigate = useNavigate()
  const handleClick = () => {
    setPlay(!play)
  }

  const {documents, error} = useCollection("user")



  return (
    // container
    <div className=" h-screen flex flex-col justify-center items-center">
      <div>
        <div className="flex flex-col items-center ">
          <div className=" text-center mb-2">&nbsp; HELLO !</div>
          <div className="mb-8  text-center flex items-center justify-center">
            {play && (
              <span className="w-5 h-5 inline-block mr-1 bg-green-500 border rounded-full"></span>
            )}
            {!play && (
              <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>
            )}
            {name.toUpperCase()}
          </div>
        </div>
        {!play && (
          <button
            className="border w-48 h-48 rounded-full drop-shadow shadow-orange-300"
            onClick={handleClick}
          >
            READY TO PLAY
          </button>
        )}
        {play && (
          <button
            className="border w-48 h-48 rounded-full drop-shadow shadow-orange-300"
            onClick={handleClick}
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
