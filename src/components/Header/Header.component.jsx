import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../assets/logo.png'
import { addUser, removeUser } from "../../utils/store/slice/userSlice";
import { firebaseSignOut } from "../../utils/common";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firbase.config.js';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // Paths where you want to hide the menu
    const hideMenuRoutes = ["/"];
    const shouldHideMenu = hideMenuRoutes.includes(location.pathname)
    //********************************** */
    // Close dropdown when clicking outside

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSignOut = async () => {
        await firebaseSignOut()
        dispatch(removeUser())
        // navigate("/")
    }

    const user = useSelector(state => state.user)

    return (
        <header className="fixed top-0 left-0 w-full z-20">
            <div className="flex items-center flex-col sm:flex-row justify-between px-6 py-3">

                {/* Left: Logo */}
                <div className="flex items-center">
                    <div className="w-32 h-16">
                        <img src={Logo} className="w-full h-full" alt="website logo" />
                    </div>
                    <p className="text-[#e50814] text-2xl font-bold ml-2">x GPT</p>
                </div>

                {/* Right: Menu */}
                {!shouldHideMenu &&
                    <nav>
                        <ol className="flex gap-6 text-white font-medium cursor-pointer items-center">
                            {
                                user && user.photoURL &&
                                <>
                                    <li>Hi, {user?.displayName || 'user'}</li>
                                    <li className="hover:text-[#e50814]">Search</li>
                                    <li>
                                        <div className="relative" ref={dropdownRef}>
                                            <div className="profile-img-container w-10 h-10 cursor-pointer hover:border border-white"
                                                onClick={() => setIsOpen(!isOpen)}
                                            >
                                                <img src={user.photoURL} className='w-full h-full' alt='user image' title={user ? 'Logout' : 'Login'} />
                                            </div>
                                            {isOpen && (
                                                <div className="absolute right-0 mt-2 w-40 bg-black border border-gray-100
                                            rounded-md shadow-lg text-white hover:bg-[#e50814]">
                                                    {/* <p className="block w-full text-left px-4 py-2 hover:bg-[#e50814]">Hi, {user.displayName}</p> */}
                                                    <button
                                                        onClick={handleSignOut}
                                                        className="block w-full text-left px-4 py-2 hover:bg-[#e50814]"
                                                    >
                                                        Logout
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                </>
                            }
                        </ol>
                    </nav>
                }

            </div>
        </header>
    )
}

export default Header
