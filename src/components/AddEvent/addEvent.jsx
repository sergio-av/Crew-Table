import React, { useState } from 'react'
import Footer from '../common/Footer/Footer'
import Topbar from '../common/TopBar/topbar'
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

import './styleAddEvent.css'

const AddEvent = () => {

    let history = useHistory();

    const [titulo, setTitulo] = useState();
    const [hora, setHora] = useState();
    const [fecha, setFecha] = useState();
    const [ubicacion, setUbicacion] = useState();
    const [categoria, setCategoria] = useState();
    const [descripcion, setDescripcion] = useState();
    const [numeroPersonas, setNumeroPersonas] = useState();

    let user = firebase.auth().currentUser;

    const createEvent = () => {
        const eventosRef = firebase.database().ref('UsuarioEventos');
        const evento = {
            evento: {
                titulo: titulo,
                hora: hora,
                fecha: fecha,
                Ubicacion: ubicacion,
                categoria: categoria,
                descripcion: descripcion,
                numPersonas: numeroPersonas,
                idUsuario: user.uid,
            }
        }

        try {
            eventosRef.push(evento)
            history.push('/eventos')
        } catch (error) {
            alert('Asegurese de rellenar todos los campos son necesarios')
        }

    }

    return (
        <div>
            <Topbar />
            <div id="formEvent">

                <div id="titleInput">
                    <div>
                        <h3>Titulo</h3>
                        <input type="text" onChange={(ev) => setTitulo(ev.target.value)} />
                    </div>
                    <hr />
                </div>

                <div id="dataEvent">
                    <div className="inputdata">
                        <div>
                            <p>Horario:</p>
                            <input type="datetime" name="hora" id="inputHora" onChange={(ev) => setHora(ev.target.value)} />
                        </div>
                        <hr />
                    </div>
                    <div className="inputdata">
                        <div>
                            <p id="textDate">Fecha:</p>
                            <input type="date" name="" id="" onChange={(ev) => setFecha(ev.target.value)} />
                        </div>
                        <hr />
                    </div>
                    <div className="inputdata">
                        <div>
                            <p>Ubicaci??n:</p>
                            <input type="text" onChange={(ev) => setUbicacion(ev.target.value)} />
                        </div>
                        <hr />
                    </div>
                </div>

                <div id="categoriAddEvent">
                    <div className="titlesAdd">
                        <div>
                            <h3>Categoria</h3>
                        </div>
                        <hr />
                    </div>
                    <div id="checkBoxAdd">
                        <div className="checkAdd">
                            <p>Duelos de cartas</p>
                            <input type="radio" value="duelo" name="categoria" onChange={(ev) => setCategoria(ev.target.value)} />
                        </div>
                        <div className="checkAdd">
                            <p>Juegos de mesa</p>
                            <input type="radio" value="mesa" name="categoria" onChange={(ev) => setCategoria(ev.target.value)} />
                        </div>
                        <div className="checkAdd">
                            <p>Juegos Cl??sicos</p>
                            <input type="radio" name="categoria" value="clasico" onChange={(ev) => setCategoria(ev.target.value)} />
                        </div>
                    </div>
                </div>

                <div id="descriptioAddEvent">
                    <div className="titlesAdd">
                        <div>
                            <h3>Descripci??n</h3>
                        </div>
                        <hr />
                    </div>
                    <textarea name="" id="textAeraAdd" cols="95
                    " rows="10" onChange={(ev) => setDescripcion(ev.target.value)}></textarea>
                </div>

                <div className="inputdata">
                    <div>
                        <p>Numero de personas:</p>
                        <input type="number" name="" id="inputNumber" onChange={(ev) => setNumeroPersonas(ev.target.value)} />
                    </div>
                    <hr />
                </div>

                <button id="buttonAddE" onClick={createEvent}> Publicar Evento </button>

            </div>
            <Footer />
        </div>
    )
}

export default AddEvent
