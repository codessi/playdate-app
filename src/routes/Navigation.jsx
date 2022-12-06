import {Outlet, Link} from "react-router-dom"
import Logo from './../assets/logo.png'

const Navigation = () => {
    return (
        <>
            {/* <div className="h-screen relative"> */}
                <div className="text-center fixed border inset-x-0 top-0 text-gray-800 font-semibold  p-2 text-2xl flex justify-center items-center"><img className=" h-8" src={Logo} alt="" /><span>PLAY DATE</span></div>
                <Outlet />

                <div className="fixed bottom-0 border inset-x-0 text-center">
                    <ul className="flex justify-around">
                        <Link className="w-full" to='/on-off'> <li className="border w-full p-3">ON/OFF</li></Link>
                        <Link className="w-full" to='/list'> <li className="border w-full p-3">LIST</li></Link>
                        <Link className="w-full" to='/'><li className="border w-full p-3">SIGN IN</li></Link>
                    </ul>

                </div>
            {/* </div> */}
            
        </>
        

    )
}

export default Navigation

