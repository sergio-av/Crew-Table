import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home/home';
import ListEvent from '../components/ListEvent/listEvent';
import Login from '../components/Login/Login';
import Perfil from '../components/Perfil/Perfil';
import Register from '../components/Register/register';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                    <Route path='/' component={Home} exact />
                    <Route path='/inicio' component={Home} exact />
                    <Route path='/eventos' component={ListEvent}/>
                    <Route path='/perfil' component={Perfil}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
            </BrowserRouter>
        </div>
    )
}

export default Router
