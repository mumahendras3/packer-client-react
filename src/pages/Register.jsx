import { Link } from "react-router-dom"
import { logo, signUp } from "../assets/img"

const Register = () => {
    return (
        <div id="signUp" className="w-screen h-screen p-3">
            <div id="content" className="flex justify-start items-center h-full">
                <div id="left" className="bg-[#F6F9FF] h-full p-5 flex flex-col justify-between w-1/2">
                    <div id="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div id="heroImg">
                        <img src={signUp} alt="" />
                    </div>
                </div>
                <div id="right" className="p-16 w-1/2">
                    <div id="content">
                        <div id="heading" className="mb-5">
                            <h1 className="text-3xl font-bold">Get  Started</h1>
                            <p className="text-base text-gray-500">Create your account now</p>
                            <hr className="border w-[50px] mt-4" />
                        </div>
                        <form action="">
                            <div id="input" className="flex flex-col gap-8">
                                <div id="fullname" className="flex flex-col">
                                    <label className="text-gray-500" htmlFor="">Full name</label>
                                    <input type="text" className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full" placeholder="ex: Mahendra" />
                                </div>
                                <div id="email" className="flex flex-col">
                                    <label className="text-gray-500" htmlFor="">Email</label>
                                    <input type="text" className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full" placeholder="ex: Mahendra@gmail.com" />
                                </div>
                                <div id="password" className="flex flex-col">
                                    <label className="text-gray-500" htmlFor="">Password</label>
                                    <input type="password" className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full" placeholder="* * * * *" />
                                </div>
                                <button className="bg-[#1F43CF] py-3 text-white font-medium rounded-md">Sign Up</button>
                            </div>
                            <div id="toLogin" className="mt-4 text-center">
                                <p>
                                    Have an account? <span className="text-[#1F43CF] font-medium"><Link to={'/login'}>Login</Link></span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register