import React from "react";
import {Routes, Route} from 'react-router-dom';
import Tables from './Tables';
import Login from './Login';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoggined: false,
        }
    }

    render(){
        return(
            <main id="main">
                <Routes>
                    <Route exact path ='/' element={<Login/>}/>
                    <Route
                        path="user"
                        element={<Tables/>}
                    />
                </Routes>
            </main>
        )
    }
}

export default Main;