import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { PlayContextProvider } from "./context/PlayContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <PlayContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PlayContextProvider>
    </React.StrictMode>
)
