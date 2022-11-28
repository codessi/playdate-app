import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navigation from "./routes/Navigation"
import Home from "./routes/Home"
import SignInForm from "./routes/SignInForm"
import List from "./routes/List"
import TempSignIn from "./routes/TempSignIn"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />

                    <Route path="sign-in" element={<SignInForm />} />
                    <Route path="list" element={<List />}/>
                    <Route path="temp-sign-in" element={<TempSignIn />}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
