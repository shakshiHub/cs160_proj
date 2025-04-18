import React from 'react'
import Link from 'next/link'
import { MdMailOutline, MdOutlineVpnKey } from "react-icons/md";
import { AuroraBackground } from "@/components/ui/aurora-background";


const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-150">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className = "rounded-2xl shadow-2xl flex bg-white w-2/3 max-w-4xl">
            <div className="w-3/5 p-5">
                <div className="text-left font-bold">
                    Food<span className="text-blue-700">EZ</span>
                </div>
                <div className = "py-15">
                    <h2 className="text-3xl font-bold text-blue-950 mb-2">
                        Faculty Sign In
                    </h2>
                    <div className="border-2 w-10 border-blue-950 inline-block mb-4 mt-1"></div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-4 rounded-2xl">
                            <MdMailOutline className="text-gray-400 mx-2 my-3"/>
                            <input type="email" name="email" placeholder="Email" pattern="^[a-zA-Z0-9._%+-]+@sjsu\.com$" required className="bg-gray-100 outline-none text-m flex-1"></input>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-3">
                            <MdOutlineVpnKey className="text-gray-400 mx-2 my-3"/>
                            <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-m flex-1"></input>
                        </div>
                        <div className="flex justify-between w-64 mb-5">
                            <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>Remember Me</label>
                            <Link href="#" className="text-xs">Forgot Password?</Link>
                        </div>
                        <Link href="#" className="border-2 border-blue-950 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-950 hover:text-white text-blue-950">Sign In</Link>
                    </div>
                </div>
            </div> {/* Sign in Section*/}          
            <AuroraBackground className="rounded-tr-2xl rounded-br-2xl py-20 px-12 text-white">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2">Are you a Spartan?</h2>
                    <h2 className="text-2xl font-bold mb-2">Sign up here</h2>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="border-2 w-10 border-white"></div>
                        <Link
                            href="#"
                            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-950">
                            Sign Up
                        </Link>
                    </div>
                    <h2 className="mt-10 text-3xl font-bold mb-2 pt-2">Faculty with no Account?</h2>
                    <h2 className="text-2xl font-bold mb-2">Sign up here</h2>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="border-2 w-10 border-white"></div>
                        <Link
                            href="#"
                            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-950">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </AuroraBackground>
            
        </div>
    </main>
    </div>
  )
}

export default SignInPage