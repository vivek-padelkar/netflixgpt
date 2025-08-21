import React, { useState } from 'react'
import { NETFLIX_BG_URL } from '../../utils/constants'
import toast from 'react-hot-toast';

const Login = () => {
    const [isSignup, setIsSignUp] = useState(false)
    // toast('Here is your toast.');
    return (
        <div
            className="h-screen w-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${NETFLIX_BG_URL})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <form action="">
                    <div className="bg-[#020201]/90 flex flex-col gap-6 p-10 w-[300px] md:w-[500px] rounded-lg">
                        <h2 className="text-white text-4xl font-bold text-center">{isSignup ? 'Sign up' : 'Sign In'}</h2>
                        <div className="flex flex-col gap-4">
                            {isSignup &&
                                <input
                                    type="text"
                                    required
                                    className="bg-black border border-[#5f5f5f] p-3 rounded-md text-white placeholder-gray-400"
                                    placeholder="Enter your name"
                                />
                            }
                            <input
                                type="email"
                                required
                                className="bg-black border border-[#5f5f5f] p-3 rounded-md text-white placeholder-gray-400"
                                placeholder="Enter your email"
                            />
                            <input
                                type="password"
                                required
                                className="bg-black border border-[#5f5f5f] p-3 rounded-md text-white placeholder-gray-400"
                                placeholder="Password"
                            />
                        </div>

                        <button className="text-white bg-[#e50914] py-3 rounded-md font-semibold hover:bg-red-700 transition">
                            {isSignup ? 'Create an account' : 'Login '}
                        </button>
                        <p className='text-lg text-white'>
                            {isSignup ? 'Already have an account? ' : ' New to Netflix-GPT? '}
                            <span className='cursor-pointer hover:underline' onClick={() => { setIsSignUp(!isSignup) }}>{isSignup ? 'Sign in' : 'Sign up'}</span></p>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login
