import React, { useState } from 'react';
import './styleRegister.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import logoRegister from '../../img/logoRegister.svg'
import firebase from 'firebase';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [apodo, setApodo] = useState('');
    const history = useHistory()
    

    const registerUser = async () => {
        if (name !== '' && apodo !== '') {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                history.push('/inicio')
                createUser(user.uid);
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                alert('Recuerde que la contraseña debe tener minimo 6 digitos')
            });
        }else{
            alert('Recuerde de completar todos los campos')
        }
    }



    const createUser = (id) =>{
        const usuariosRef = firebase.database().ref("Usuarios");
        const usuario = {
            nombre:name,
            apodo:apodo,
            email:email,
            id:id,
        }

        usuariosRef.push(usuario);
    }
    

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
                                <input type="text" id="nick" name="nick" autoComplete="off" onChange={(ev) => setApodo(ev.target.value)}/>
                            </div>
                            <hr className="hrRegister"/>
                        </div>
                        <div className="inputsRegister">
                            <div>
                                <label htmlFor="userName">Nombre:</label>
                                <input type="text" id="userName" name="userName" autoComplete="off" onChange={(ev) => setName(ev.target.value)}/>
                            </div>
                            <hr className="hrRegister"/>
                        </div>
                        <div className="inputsRegister">
                            <div>
                                <label htmlFor="userPass">Contraseña:</label>
                                <input type="password" id="userPass" name="userPass" onChange={(ev) => setPassword(ev.target.value)}/>
                            </div>
                            <hr className="hrRegister"/>
                        </div>
                        <div className="inputsRegister">
                            <div>
                                <label htmlFor="userPass">Gmail:</label>
                                <input type="gmail" id="gmail" name="gmail" autoComplete="off" onChange={(ev) => setEmail(ev.target.value)}/>
                            </div>
                            <hr className="hrRegister"/>
                        </div>
                    </form>
                    <button onClick={registerUser}>Enviar solicitud</button>
                    <Link to="/login" className="enlaceRegister">¿Ya te unistes?</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
