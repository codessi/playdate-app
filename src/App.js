import logo from "./logo.svg"
import "./App.css"

function App() {
    return (
        // <div className="h-screen border border-rose-700 flex">
        <div className="App w-full h-screen font-bold flex justify-center border border-blue-700 items-center flex-col ">
            <div className="-mt-32 border border-purple-400 p-16">
              <div>Welcome to </div>
              <div className="mb-5">PLAY APP</div>
              <div>Login</div>
              <div>User Name</div>
              <input type="text" className="border border-gray-800" />
              <div>Password</div>
              <input type="text" className="border border-gray-800" />
            </div>
        </div>
        // </div>
    )
}

export default App
