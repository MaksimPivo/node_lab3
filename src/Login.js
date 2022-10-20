import React from "react";
import UsersApi from './Users';
import "./login.css";


class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLogined: false,
            email:"",
            password:"",
        };
    }

    handleChange = event =>{
        const {name, value} = event.target;

        this.setState({
            [name] : value
        });
    }

    render(){
        const {email, password} = this.state;
        return (
            <div class="login">
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    value={email} 
                    onChange={this.handleChange}/>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={this.handleChange}/>
                <button id="button" onClick={function(){
                    if(UsersApi.isUsers(email, password)){
                        window.location.href = '/user';
                        this.props.state.isLogined = true;
                    } else {
                        alert("email or password is incorrect");
                    }
                }}>Login</button>
            </div>
        )
    }
}

export default Login;