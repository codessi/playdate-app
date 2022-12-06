import { useState } from "react"
import DetailDisplayModal from "./DetailDisplayModal"

const User = ({user}) => {
  const [showModal, setShowModal] = useState(false)
const { name, playOn }= user


  return (
    <div
      key={name}
      
      className={`mb-8  ${user.details &&"underline" } text-left flex items-center justify-center `}
    >
      {playOn && (
        <span className="w-5 h-5 inline-block mr-1 bg-green-500 border rounded-full"></span>
      )}
      {!playOn && (
        <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>
      )}
      <div onClick={()=> setShowModal(true)} >{name.toUpperCase()}</div>
      {showModal && <DetailDisplayModal showModal={showModal} setShowModal= {setShowModal}name={name} user={user}/>}
    </div>
  )
}

export default User
