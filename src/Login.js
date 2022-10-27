import React, { useState } from "react";
import UsersApi from './Users';
import "./login.css";
import { useNavigate } from "react-router-dom";


const Login = (props) => {

    const navigate = useNavigate();

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    return (
        <div class="login">
            <input 
                type="text" 
                name="email" 
                id="email" 
                value={email} 
                onChange={onChangeEmail}/>
            <input 
                type="password" 
                name="password" 
                id="password" 
                value={password}
                onChange={onChangePassword}/>
            <button id="button" onClick={function(){
                if(UsersApi.isUsers(email, password)){
                    props.handleLogin();
                    navigate("/user");
                } else {
                    alert("email or password is incorrect");
                }
            }}
            >Login</button>
        </div>
    );
};

export default Login;