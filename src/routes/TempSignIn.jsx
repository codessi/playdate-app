import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PlayContext } from '../context/PlayContext'

const TempSignIn = () => {
    const {name, setName} = useContext(PlayContext)
    const handleChange = (e) => {
        setName(e.target.value)
        console.log(name)
    }


  return (
    <div className='border border-red-300 h-full flex flex-col justify-center items-center space-y-4'>
        <div>PLEASE PUT YOUR NAME HERE</div>
        <input className='border border-gray-400 text-center' type="text" value={name} 
        onChange={handleChange}
        />
        <div>AND</div>
        <Link to ="/"className='border rounded p-4 px-12 shadow-md' >START</Link>
    </div>
  )
}

export default TempSignIn