import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { NETFLIX_BG_URL } from '../../utils/constants'
import { validateEmailAndpassword } from './validations/validate';
import { firebaseSignIn, firebaseSignUp } from '../../utils/common';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [isSignup, setIsSignUp] = useState(false)
    const [loading, setLoading] = useState(false)
    const refEmail = useRef(null)
    const refPassword = useRef(null)
    const refName = useRef(null)

    const handleButtonClick = async (e) => {
        e.preventDefault()
        try {
            const validationMsg = validateEmailAndpassword(refEmail.current.value.trim(), refPassword.current.value.trim())
            if (validationMsg) {
                toast.error(validationMsg)
            } else {
                if (isSignup) {
                    setLoading(true)
                    await firebaseSignUp(refEmail.current.value, refPassword.current.value, refName.current.value)
                    toast.success('User created Successfully')
                    navigate('/browse')
                    setLoading(false)
                } else {
                    setLoading(true)
                    await firebaseSignIn(refEmail.current.value, refPassword.current.value)
                    toast.success('User logged in Successfully')
                    navigate('/browse')
                    setLoading(false)
                }
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            setLoading(false)
        }
    }
    return (
        <div
            className="h-screen w-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${NETFLIX_BG_URL})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <form onSubmit={handleButtonClick}>

                    <div className="bg-[#020201]/90 flex flex-col gap-6 p-10 w-[300px] md:w-[500px] rounded-lg">
                        <h2 className="text-white text-4xl font-bold text-center">{isSignup ? 'Sign up' : 'Sign In'}</h2>
                        <div className="flex flex-col gap-4">
                            {isSignup &&
                                <input
                                    type="text"
                                    required
                                    className="bg-black border border-[#5f5f5f] p-3 rounded-md text-white placeholder-gray-400"
                                    placeholder="Enter your name"
                                    ref={refName}
                                />
                            }
                            <input
                                type="text"
                                required
                                className="bg-black border border-[#5f5f5f] p-3 rounded-md text-white placeholder-gray-400"
                                placeholder="Enter your email"
                                ref={refEmail}
                            />
                            <input
                                type="password"
                                required
                                className="bg-black border border-[#5f5f5f] p-3 rounded-md text-white placeholder-gray-400"
                                placeholder="Password"
                                ref={refPassword}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`text-white bg-[#e50914] py-3 rounded-md font-semibold transition 
                            ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-red-700'}`}
                        >
                            {loading ? 'Loading...' : isSignup ? 'Create an account' : 'Login'}
                        </button>

                        <p className='text-lg text-white'>
                            {isSignup ? 'Already have an account? ' : ' New to Netflix-GPT? '}
                            <span className='cursor-pointer hover:underline' onClick={() => { setIsSignUp(!isSignup) }}>{isSignup ? 'Sign in' : 'Sign up'}</span></p>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Login
