import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navigation from "./routes/Navigation"
import OnOff from "./routes/OnOff"
import SignInForm from "./routes/SignInForm"
import List from "./routes/List"
import TempSignIn from "./routes/TempSignIn"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<TempSignIn />} />
                <Route path="on-off" element={<OnOff />} />
                {/* <Route path="sign-in" element={<SignInForm />} /> */}
                <Route path="list" element={<List />} />
            </Route>
        </Routes>
    )
}

export default App
