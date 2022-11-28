import { createContext, useState } from "react";

export const PlayContext =createContext()


export  const PlayContextProvider = ({children}) => {
    const [play, setPlay] = useState(false)
    const [name, setName] = useState("")

    return (
        <PlayContext.Provider value = {{play, setPlay, name, setName}}>
            {children}
        </PlayContext.Provider>
    )
}