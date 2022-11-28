import React, { useContext } from 'react'
import { PlayContext } from '../context/PlayContext'

const List = () => {
    const {name,play, setPlay} = useContext(PlayContext)
  return (
    <div className="border h-screen flex flex-col justify-center items-center">
            <div className='flex flex-col items-start'>
                <div className="mb-8   text-left flex items-center justify-center">
                    {play && <span className="w-5 h-5 inline-block mr-1 bg-green-500 border rounded-full"></span>}
                    {!play && <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>}
                    {name.toUpperCase()}
                </div>
                <div className="mb-8  text-left flex items-center justify-center">
                    {/* {play && <span className="w-5 h-5 inline-block mr-1 bg-green-500 border rounded-full"></span>}
                    {!play && <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>} */}
                    <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>
                    KELLY
                </div>
                <div className="mb-8  text-left flex items-center justify-center">
                    {/* {play && <span className="w-5 h-5 inline-block mr-1 bg-green-500 border rounded-full"></span>}
                    {!play && <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>} */}
                    <span className="w-5 h-5 inline-block mr-1 border-black border rounded-full"></span>
                    ARRON
                </div>
                
            </div>
        </div>
  )
}

export default List