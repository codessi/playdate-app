import React from "react"

const DetailModal = ({ setShowDetailModal }) => {

  const handleSubmit = () => {
    
  }

  return (
    <div className="absolute inset-0 top-[50%] left-[50%] border h-42 translate-y-[-50%] translate-x-[-50%] w-max bg-white flex flex-col justify-center items-center p-24  ">
      <button
        className="border rounded-full absolute right-3 top-3 h-10 w-10"
        onClick={() => setShowDetailModal(false)} > x </button>
      <form className="flex flex-col" action="">
        <label htmlFor="">WHERE</label>
        <input className="border" type="location" />
        <label htmlFor=""> END TIME </label>
        <input type="time" />
        <label htmlFor="">COMMENTS</label>
        <textarea
          className="border"
          name=""
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <button className="border mt-3 w-max p-2 px-4 rounded" onClick={handleSubmit}>ADD</button>
      </form>
    </div>
  )
}

export default DetailModal
