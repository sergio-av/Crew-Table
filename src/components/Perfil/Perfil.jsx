import React from 'react'
import Footer from '../common/Footer/Footer'
import Topbar from '../common/TopBar/topbar'
import Poster from '../common/Poster/poster'

import './stylePerfil.css'

const Perfil = () => {
    return (
        <div>
            <Topbar />
            <Poster name="Tu Perfil" id="poster" className="posterPerfil"/>
            <div id="bodyPerfil">
                <div id="formComplete">
                    <h3>Tus Datos</h3>
                    <form>
                        <div>
                            <div className="inputs">
                                <div className="inputPerfil">
                                    <p>Nombre:</p>
                                    <input type="text" />
                                </div>
                                <hr className="hrInputPerfil" />
                            </div>
                            <div className="inputs">
                                <div className="inputPerfil">
                                    <p>Usuario:</p>
                                    <input type="text" />
                                </div>
                                <hr className="hrInputPerfil" />
                            </div>
                            <div className="inputs">
                                <div className="inputPerfil">
                                    <p>Password:</p>
                                    <input type="password" />
                                </div>
                                <hr className="hrInputPerfil" />
                            </div>
                            <div className="inputs">
                                <div className="inputPerfil">
                                    <p>Gmail:</p>
                                    <input type="email" />
                                </div>
                                <hr className="hrInputPerfil" />
                            </div>
                        </div>
                    </form>
                    <div id="buttonForm">
                        <button type="submit">Modificar</button>
                        <button>Aceptar</button>
                    </div>
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Perfil
