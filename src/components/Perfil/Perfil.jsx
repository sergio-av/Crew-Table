import React, { useState, useEffect } from 'react'
import Footer from '../common/Footer/Footer'
import Topbar from '../common/TopBar/topbar'
import Poster from '../common/Poster/poster'

import './stylePerfil.css'

import 'firebase/auth';
import firebase from 'firebase';


const Perfil = () => {

    const [currentUser, setCurrentUser] = useState();

    const user = firebase.auth().currentUser;

    const [datos, setDatos] = useState({
        nombre: '',
        apodo: '',
    })

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    console.log(`user`, user)

    useEffect(() => {
        const usuariosRef = firebase.database().ref('Usuarios');

        usuariosRef.on('value', (snapshot) => {
            const usuarios = snapshot.val();
            for (let idDataFb in usuarios) {
                if (usuarios[idDataFb].id == user.uid) {
                    setCurrentUser(usuarios[idDataFb])
                    setDatos({
                        nombre: usuarios[idDataFb].nombre,
                        apodo: usuarios[idDataFb].apodo,
                    })
                }
            }

        });

    }, [user]);

    const handleUpdate = (event) => {
        event.preventDefault()
        const usuariosRef = firebase.database().ref('Usuarios');
        usuariosRef.on('value', (snapshot) => {
            const usuarios = snapshot.val();
            for (let idDataFb in usuarios) {
                if (usuarios[idDataFb].id == user.uid) {
                    const usuariosUpdateRef = firebase.database().ref('Usuarios').child(idDataFb);
                    usuariosUpdateRef.update(datos);
                }
            }
        });

    }

    //dato.data.usuario.email
    return (
        <div>
            <Topbar />
            <Poster name="Tu Perfil" id="poster" className="posterPerfil" />
            <div id="bodyPerfil">
                <div id="formComplete">
                    <h3>Tus Datos</h3>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <div className="inputs">
                                <div className="inputPerfil">
                                    <p>Nombre:</p>


                                    <input type="text" name='nombre' value={datos?.nombre} onChange={handleInputChange} />


                                </div>
                                <hr className="hrInputPerfil" />
                            </div>
                            <div className="inputs">
                                <div className="inputPerfil">
                                    <p>Usuario:</p>



                                    <input type="text" name='apodo' value={datos?.apodo} onChange={handleInputChange} />


                                </div>
                                <hr className="hrInputPerfil" />
                            </div>
                        </div>
                        <div id="buttonForm">
                            <button type="submit">Modificar</button>
                        </div>
                    </form>
                </div>

                <div id="misEvents">
                    <div id="titleMisEvents">
                        <div id="titleE">
                            <h4> Tus Eventos </h4>
                            <hr />
                        </div>
                        <div id="etiquetasP">
                            <p>Nombre</p>
                            <p>Fecha</p>
                        </div>
                    </div>

                    <p>Componenete evento</p>

                    <hr />
                    <button id="buttonDeleteEvent">Eliminar Evento</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Perfil
