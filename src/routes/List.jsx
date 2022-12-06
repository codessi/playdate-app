import React, { useContext, useState } from "react"
import User from "../components/User"
import { PlayContext } from "../context/PlayContext"
import { useCollection } from "../hooks/useCollection"
import { changeAllDoc } from "../utils/firebase/firebase.utils"

const List = () => {
  // const { name, play, setPlay } = useContext(PlayContext)

  const { documents, error } = useCollection("users")
  console.log(documents)

  // changeAllDoc( )



  return (
    <div className="border h-screen flex flex-col justify-center items-center">
      <div className="flex relative flex-col items-start">
        {documents?.map((user) => {
          const { name, playOn } = user
          return (
            <User key={name} user={user}/>
          )
        })}
        
      </div>
    </div>
  )
}

export default List
