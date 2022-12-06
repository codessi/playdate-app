import React from "react"

const DetailDisplayModal = ({name,showModal, setShowModal, user}) => {
console.log(showModal)
const clickHandler = () => {
  setShowModal(false)
}

console.log(user)

  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border bg-white h-full w-max  p-10 ">
       <button
        className="border rounded-full absolute right-1 top-1 h-10 w-10"
        onClick={clickHandler}
      > x </button>
      {" "}
      
   { user.details ? <>
   <div>{name.toUpperCase()} WILL BE PLAYING </div>
      <div>LOCATION: {user.details.where}</div>
        <div>DATE:{user.details.date}</div>
        <div>TIME</div>
        <div>START:{user.details.start}</div>
        <div>End:{user.details.end}</div>
   </> : <div>TEXT US FOR DETAIL</div>}
    </div>
  )
}

export default DetailDisplayModal
