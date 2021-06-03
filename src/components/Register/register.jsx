import React from 'react';
import './styleRegister.css';
import { Link } from 'react-router-dom';

import logoRegister from '../../img/logoRegister.svg'

const Register = () => {
    return (
        <div>
            <div id="body">
                <div id="contentRegister">
                    <div id="titleRegister">
                        <img src={logoRegister} alt="logo" />
                        <h1>Bienvenido a la familia</h1>
                    </div>
                    <form action="">
                        <div className="inputsRegister">
                            <div>
                                <label htmlFor="">Apodo:</label>
                                <input type="text" id="nick" name="nick"/>
                            </div>
                            <hr className="hrRegister"/>
                        </div>
                        <div className="inputsRegister">
                            <div>
                                <label htmlFor="userName">Nombre:</label>
                                <input type="text" id="userName" name="userName"/>
                            </div>
                            <hr className="hrRegister"/>
                        </div>
                        <div className="inputsRegister">
                            <div>
                                <label htmlFor="userPass">Contraseña:</label>
                                <input type="password" id="userPass" name="userPass"/>
                            </div>
                            <hr className="hrRegister"/>
                        </div>
                        <div className="inputsRegister">
                            <div>
                                <label htmlFor="userPass">Gmail:</label>
                                <input type="gmail" id="gmail" name="gmail"/>
                            </div>
                            <hr className="hrRegister"/>
                        </div>
                    </form>
                    <button>Enviar solicitud</button>
                    <Link to="/login" className="enlaceRegister">¿Ya te unistes?</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
