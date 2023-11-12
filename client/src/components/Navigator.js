import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard/drivers_dashboard';
import Home from './Landing/landing_page';
import SignIn from './Login/login';
import NavBar from './NavBar';
import SignUp from './Registeration/driver_form';
import { RequestsProvider } from '../contexts/RequestsProvider'
import Footer from './Pages/footer';
import DriversProfile from './Dashboard/drivers_profile';
import {SignIn as UserSignup} from './Login/Singup';
import {SignIn as UserLogin} from './Login/Userlogin';

function Navigator() {
    
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/Userlogin" element={<UserLogin />} />
                <Route path="/signup" element={<UserSignup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/editProfile/:id" element={<DriversProfile />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Navigator;