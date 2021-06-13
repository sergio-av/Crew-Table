import React, {useEffect, useState} from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Home from '../components/Home/home';
import ListEvent from '../components/ListEvent/listEvent';
import Login from '../components/Login/Login';
import Perfil from '../components/Perfil/Perfil';
import Register from '../components/Register/register';
import AddEvent from '../components/AddEvent/addEvent';
import Event from '../components/Event/event';

import { useSession } from '../store/session';


const Router = () => {

    const { isLoggedIn, isLoading } = useSession();

    if (isLoading) return <h2>Loading . . .</h2>
        
    

    if (isLoggedIn) return (
        <BrowserRouter>
            <Route exact path='/' component={Home}  />
            <Route path='/eventos' component={ListEvent} />
            <Route path='/perfil' component={Perfil} />
            <Route path='/addevent' component={AddEvent} />
            <Route path='/event/:id' component={Event} />
            <Redirect to='/' />
        </BrowserRouter>
    )
    return (
        <BrowserRouter>
            <Route path='/' component={Login} />
            <Route path='/register' component={Register} />  
            <Redirect to='/' />
        </BrowserRouter>

    )
}

export default Router
