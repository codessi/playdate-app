import React, { useContext } from "react"
import { PlayContext } from "../context/PlayContext"
import { useCollection } from "../hooks/useCollection"

const List = () => {
  // const { name, play, setPlay } = useContext(PlayContext)

  const { documents, error } = useCollection("users")
  console.log(documents)

  return (
    <div className="border h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-start">
        {documents?.map((user) => {
          const { name, playOn } = user
          return (
            <div key={name} className="mb-8   text-left flex items-center justify-center">
              {playOn && (
                <span className="w-5 h-5 inline-block mr-1 bg-green-500 border rounded-full"></span>
              )}
              {!playOn && (
                <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>
              )}
              {name.toUpperCase()}
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default List
