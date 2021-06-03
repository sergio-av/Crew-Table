import React from 'react';
import { Link } from 'react-router-dom';

import logoTopbar from '../../../img/logoTopbar.svg';

import './styleTopbar.css';

const Topbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div id="contentTopBar">
                    <div>
                        <a class="navbar-brand" href="#"><img src={logoTopbar} alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse " >
                        <div class="navbar-nav">
                            <Link to="/inicio" className="enlace">Inicio</Link>
                            <Link to="/eventos" className="enlace">Eventos</Link>
                            <Link to="/perfil" className="enlace">Perfil</Link>
                            <Link to="/login" className="enlace">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Topbar
