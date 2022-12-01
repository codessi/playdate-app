import "./App.css"
import { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import Navigation from "./routes/Navigation"
import OnOff from "./routes/OnOff"
import SignInForm from "./routes/SignInForm"
import List from "./routes/List"
import TempSignIn from "./routes/TempSignIn"

function App() {
    return (
        
        <div className="h-screen">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<TempSignIn />} />
                    <Route path="on-off" element={<OnOff />} />
                    {/* <Route path="sign-in" element={<SignInForm />} /> */}
                    <Route path="list" element={<List />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
