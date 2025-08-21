import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import BrowseContent from '../Browse/BrowseContent.component'
import Header from '../Header/Header.component'
import Login from '../Login/Login.component'
const Body = () => {
    return (
        <Router>
            <Toaster />
            <Header />
            <Routes>
                <Route index element={<Login />} />
                <Route path="/browse" element={<BrowseContent />} />
            </Routes>
        </Router>
    );
};

export default Body;
