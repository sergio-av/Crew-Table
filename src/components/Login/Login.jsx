import React from 'react';
import './styleLogin.css';
import { Link } from 'react-router-dom';


import logoLogin from '../../img/logoLogin.svg'

const Login = () => {
    return (
        <div>
            <div id="body">
                <div id="contentLogin">
                    <img src={logoLogin} alt="logo" />
                    <input type="text" name="userName" placeholder="Usuario" autoComplete="on"/>
                    <input type="password" name="userPass" placeholder="Contraseña" />
                    <Link to="/register" className="enlaceLogin">¿no formas parte de la crew?</Link>
                    <button>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
