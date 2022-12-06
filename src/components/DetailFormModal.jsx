import React, { useContext, useState } from "react"
import { addDetails } from "../utils/firebase/firebase.utils"
import { PlayContext } from "../context/PlayContext"

const today = new Date()
// const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const date = new Date().toISOString().substring(0, 10)

const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

const DetailFormModal = ({ setShowDetailFormModal }) => {
  const {user} = useContext(PlayContext)
  const INITIAL_STATE = {
    where: "",
    dateOf: date,
    start: time,
    end: "",
    comments: "",
  }

  const [details, setDetails] = useState(INITIAL_STATE)
  const { where, dateOf, start, end, comments } = details

  console.log(details)
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addDetails(user, details)
  }

  return (
    <div className="absolute inset-0 top-[50%] left-[50%] border  translate-y-[-50%] translate-x-[-50%] h-max w-max bg-white flex flex-col justify-center items-center p-5 rounded-lg shadow-md ">
      <button
        className="border rounded-full absolute right-3 top-3 h-10 w-10"
        onClick={() => setShowDetailFormModal(false)}
      >
        {" "}
        x{" "}
      </button>
      <form className="flex flex-col mt-12" action="">
        <label className="my-2" htmlFor="">
          <div>WHERE</div>
          <input
            className="border w-full"
            type="location"
            name="where"
            value={where}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <span className="mr-3">DATE</span>
          <input
            className="border w-full"
            type="date"
            name="dateOf"
            onChange={handleChange}
            value={dateOf}
          />
        </label>
        <label className="my-2" htmlFor="">
          <h2 className="mb-1">TIME</h2>
          <div className="flex justify-around  border">
            <div>
              <div>START </div>
              <input
                type="time"
                value={start}
                onChange={handleChange}
                name="start"
              />
            </div>
            <div>
              <div>END </div>
              <input
                type="time"
                value={end}
                name="end"
                onChange={handleChange}
              />
            </div>
          </div>
        </label>
        <label className="my-2" htmlFor="">
          <div>COMMENTS</div>
          <textarea
            className="border"
            name="comments"
            value={comments}
            id=""
            onChange={handleChange}
            cols="30"
            rows="5"
          ></textarea>
        </label>
        <button
          className="border mt-3 w-max p-2 px-4 rounded"
          onClick={handleSubmit}
        >
          ADD
        </button>
      </form>
    </div>
  )
}

export default DetailFormModal
