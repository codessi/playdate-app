import {Outlet, Link} from "react-router-dom"

const Navigation = () => {
    return (
        <>
            {/* <div className="h-screen relative"> */}
                <div className="text-center fixed border inset-x-0 top-0 text-gray-800 font-semibold  p-2 text-2xl">PLAY DATE</div>
                <Outlet />

                <div className="fixed bottom-0 border inset-x-0 text-center">
                    <ul className="flex justify-around">
                        <li className="border w-full p-3"><Link to='/on-off'>ON/OFF</Link></li>
                        <li className="border w-full p-3"><Link to='/list'>LIST</Link></li>
                        <li className="border w-full p-3"><Link to='/'>SIGN IN</Link></li>
                    </ul>

                </div>
            {/* </div> */}
            
        </>
        

    )
}

export default Navigation

