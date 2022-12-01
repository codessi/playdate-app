import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { PlayContext } from "../context/PlayContext"
import { addUser } from "../utils/firebase/firebase.utils"

const TempSignIn = () => {
  const { user, setUser } = useContext(PlayContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({ ...user, name: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addUser(user)
    
    navigate("on-off")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border h-full flex flex-col justify-center items-center space-y-4"
    >
      <div className="text-center font-semibold w-[60%]">
        PLEASE PUT CHILD'S FIRST NAME HERE
      </div>
      <input
        className="border border-gray-400 w-[80%] text-center text-3xl p-1"
        type="text"
        value={user.name}
        name="name"
        label="name"
        onChange={handleChange}
      />
      <div>AND</div>
      <button type="submit" className="border rounded p-4 px-12 shadow-md">
        START
      </button>
    </form>
  )
}

export default TempSignIn
