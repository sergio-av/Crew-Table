import React from 'react';
import { Link } from 'react-router-dom';

import iconExit from '../../../img/icons/iconExit.svg';
import logoTopbar from '../../../img/logoTopbar.svg';
import './styleTopbar.css';

import firebase from 'firebase';


const Topbar = () => {

    

    let user = firebase.auth().currentUser;

    const logout = async () => {
        await firebase.auth().signOut();
        window.location.reload();
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div id="contentTopBar">
                    <div>
                        <a class="navbar-brand" href="/inicio"><img src={logoTopbar} alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse " >
                        <div class="navbar-nav">
                            <Link to="/inicio" className="enlace">Inicio</Link>
                            <Link to="/eventos" className="enlace">Eventos</Link>
                            <Link to="/perfil" className="enlace">Perfil</Link>

                            <div>
                                {!user ?
                                    <Link to="/login" className="enlace">Login</Link>
                                    : <img src={iconExit} alt="exit" onClick={logout} />}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Topbar
