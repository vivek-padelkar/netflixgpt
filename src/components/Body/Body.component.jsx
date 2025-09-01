
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firbase.config.js';
import { addUser, removeUser } from '../../utils/store/slice/userSlice.js';
import BrowseContent from '../Browse/BrowseContent.component'
import Header from '../Header/Header.component'
import Login from '../Login/Login.component'

const Body = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({ uid, email, displayName, photoURL }))
            } else {
                dispatch(removeUser())
            }
        })
    }, [])

    return (
        <Router>
            <Toaster />
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/browse" element={<BrowseContent />} />
            </Routes>
        </Router>
    );
};

export default Body;
