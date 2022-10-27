import React, { useState} from "react";
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import ProtectedRoute from "./ProtectedRoute";

function Main() {
    const [logins, setLogins] = useState(false);

    const handleLogin = e => {
        // e.preventDefault();
        setLogins(true);
    };

    return(
        <div id="main">
            <Routes>
                <Route exact path="/" element ={
                <Login handleLogin={handleLogin}/>}
                  />
                <Route
                    path="/user"
                    element={<ProtectedRoute logins={logins}/>}
                />
            </Routes>
        </div>
        );
};

export default Main;