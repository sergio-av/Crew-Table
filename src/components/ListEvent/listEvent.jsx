import React from 'react';
import ListGame from '../common/ListGame/ListGame';
import Poster from '../common/Poster/poster';
import Topbar from '../common/TopBar/topbar';

import imgDuel from '../../img/imgDuel.svg';
import imgArcade from '../../img/imgArcade.svg';
import imgDd from '../../img/imgDd.svg';

import './styleListEvents.css';
import Footer from '../common/Footer/Footer';
import { Link } from 'react-router-dom';

const ListEvent = () => {

    return (
        <div>
            <Topbar />

            <div id="bodyListEvent">
                <Poster name="Eventos" />

                <div id="buttonAdEvent">
                    <Link to="/addEvent">
                        <div id="sombra">
                            <h2>Publicar evento</h2>
                        </div>
                    </Link>
                </div>

                <hr className="hrlistEvent" />

                <div id="listsEvents">

                    <ListGame nameListGame="Duelo De Cartas" imgListGame={imgDuel} tipoList="duelos" />
                    <ListGame nameListGame="Juegos Arcade" imgListGame={imgArcade} tipoList="clasicos" />
                    <ListGame nameListGame="Juegos De Mesa" imgListGame={imgDd} tipoList="mesa" />

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default ListEvent
