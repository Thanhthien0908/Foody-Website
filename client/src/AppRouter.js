import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import TrangChu from './components/TrangChu/App';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/" render={()=>{
                        return localStorage.getItem("accessToken") ? <TrangChu /> : <Redirect to="/login" /> 
                    }}>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};


export default AppRouter;

