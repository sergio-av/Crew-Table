import React from 'react';
import './styleLogin.css';



import logoLogin from '../../img/logoLogin.svg'

const Login = () => {
    return (
        <div>
            <div id="body">
                <div id="contentLogin">
                    <img src={logoLogin} alt="logo" />
                    <input type="text" name="userName" placeholder="Usuario" autoComplete="on"/>
                    <input type="password" name="userPass" placeholder="Contraseña" />
                    <p>¿no formas parte de la Crew?</p>
                    <button>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
