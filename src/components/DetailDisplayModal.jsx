import moment from "moment/moment"
import React from "react"

function convert(input) {
  return moment(input, "HH:mm").format("h:mm A")
}

const DetailDisplayModal = ({ name, showModal, setShowModal, user }) => {
  // console.log(showModal)
  const clickHandler = () => {
    setShowModal(false)
  }

  // console.log(user)

  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border bg-white h-full w-screen  p-10 ">
      <button
        className="border rounded-full absolute right-1 top-1 h-10 w-10"
        onClick={clickHandler}
      >
        {" "}
        x{" "}
      </button>{" "}
      {user.details ? (
        <>
          <div>{name.toUpperCase()} WILL BE PLAYING </div>
          <div>LOCATION: {user.details.where}</div>
          <div>DATE:{user.details.dateOf}</div>
          <div>TIME</div>
          <div>START:{convert (user.details.start)!=="Invalid date" && convert (user.details.start)}</div>
          <div>End:{convert (user.details.end)!=="Invalid date" && convert (user.details.end)}</div>
          <div>Comments: {user.details.comments}</div>
        </>
      ) : (
        <div>TEXT US FOR DETAIL</div>
      )}
    </div>
  )
}

export default DetailDisplayModal
