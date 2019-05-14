import React from 'react';
import {Route, Switch } from "react-router";
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Pages/Home/home';
import News from './Components/Pages/News/news';
import Profile from './Components/Pages/Profile/profile';
import Login from './Components/Pages/Login/login';
import PrivateProfileRoute from './Components/Pages/Profile/privateProfileRoute';
import PrivateLoginRoute from './Components/Pages/Login/privateLoginRoute';


const App = () => {
    return (
        <div className='container'>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News}/>
                <PrivateProfileRoute path="/profile" component={Profile} />
                <PrivateLoginRoute path="/login" component={Login} />
            </Switch>
        </div>
    )
};


export default App;