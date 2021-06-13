import React, { useState } from 'react';
import './styleLogin.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';



import logoLogin from '../../img/logoLogin.svg'

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    return (
        <div>
            <div id="body">
                <div id="contentLogin">
                    <img src={logoLogin} alt="logo" />
                    <input type="email" name="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} autoComplete="off" />
                    <input type="password" name="userPass" placeholder="Contraseña" onChange={(ev) => setPassword(ev.target.value)} />
                    <Link to="/register" className="enlaceLogin">¿no formas parte de la crew?</Link>
                    <button onClick={loginUser}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
