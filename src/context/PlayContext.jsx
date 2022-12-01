import { createContext, useEffect, useState } from "react";
import {useCollection} from '../hooks/useCollection'

export const PlayContext =createContext()

const ININITAL_STATE = {
    name : "",
    playOn: false
}


export  const PlayContextProvider = ({children}) => {

    // const [play, setPlay] = useState(false)
    const [user, setUser] = useState(ININITAL_STATE)


    

    return (
        <PlayContext.Provider value = {{ user, setUser}}>
            {children}
        </PlayContext.Provider>
    )
}