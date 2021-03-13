import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import TrangChu from './component/TrangChu/App';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
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

