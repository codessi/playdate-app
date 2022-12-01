import React from "react"

const SignInForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="App w-full h-screen font-bold flex text-gray-700 justify-start border border-blue-700 items-center flex-col ">
            <div className="mt-20 ">tailwind version</div>
            <div className="border border-purple-300 p-16">
                <form onSubmit={handleSubmit}>
                    <div>Welcome to </div>
                    <div className="mb-5">PLAYDATE APP</div>
                    <div>Login</div>
                    <div>User Name</div>
                    <input type="text" className="border border-gray-800" />
                    <div>Password</div>
                    <input type="text" className="border border-gray-800" />
                    <button type="submit" className="block w-full border mt-3 bg-yellow-200   p-3">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm
