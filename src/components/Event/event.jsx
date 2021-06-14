import React, { useEffect, useState } from 'react'
import Footer from '../common/Footer/Footer'

import Topbar from '../common/TopBar/topbar'
import firebase from 'firebase';
import imgArcade from '../../img/imgArcade.svg'
import imgDd from '../../img/imgDd.svg'
import imgDuel from '../../img/imgDuel.svg'
import { useParams } from 'react-router-dom';
import './styleEvent.css'

const Event = () => {

    const { id } = useParams();

    const [currentEvent, setCurrentEvent] = useState();

    useEffect(() => {
        const eventosRef = firebase.database().ref('UsuarioEventos');

        eventosRef.on('value', (snapshot) => {
            const eventos = snapshot.val();
            for (let idDataFb in eventos) {
                if (idDataFb === id) {
                    setCurrentEvent(eventos[id].evento)
                }
            }

        });
    }, []);

    return (
        <div>
            <Topbar />
            <div id="bodyEvent">
                <div id="cabeceraEvent">
                    {currentEvent?.categoria === 'duelo' &&
                        <img src={imgDuel} alt="cabeceraDuelo" />
                    }
                    {currentEvent?.categoria === 'mesa' &&
                        <img src={imgDd} alt="cabeceraMesa" />
                    }
                    {currentEvent?.categoria === 'clasico' &&
                        <img src={imgArcade} alt="cabeceraArcade" />
                    }
                </div>

                <div id="data">
                    <div>
                        <h1>{currentEvent?.titulo}</h1>
                        <hr />
                    </div>
                    <div id="Eventdata">

                        <div id="izqData">


                            <div id="descriptionData">
                                <div>
                                    <h4>Descripción</h4>
                                    <hr />
                                    <p>{currentEvent?.descripcion}</p>
                                </div>
                                <p id="componentDescription"></p>
                            </div>

                            <div >
                                <div className="dataEvent">
                                    <div>
                                        <p>Ubicacion:</p>
                                        <p className="valor">{currentEvent?.Ubicacion}</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div id="derData">
                            <div className="dataEvent">
                                <div>
                                    <p>Horario:</p>
                                    <p className="valor">{currentEvent?.hora}</p>
                                </div>
                                <hr />
                            </div>
                            <div className="dataEvent">
                                <div>
                                    <p>Fecha:</p>
                                    <p className="valor">{currentEvent?.fecha}</p>
                                </div>
                                <hr />
                            </div>
                            <div className="dataEvent">
                                <div>
                                    <p>Personas Apuntadas:</p>
                                    <p className="valor">{currentEvent?.numPersonas}</p>
                                </div>
                                <hr />
                            </div>

                            <button id="buttonEvent"><del>Unirme al Evento</del> </button>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default Event
