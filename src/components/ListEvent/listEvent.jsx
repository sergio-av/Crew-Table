import React from 'react';
import ListGame from '../common/ListGame/ListGame';
import Poster from '../common/Poster/poster';
import Topbar from '../common/TopBar/topbar';

import imgDuel from '../../img/imgDuel.svg';
import imgArcade from '../../img/imgArcade.svg';
import imgDd from '../../img/imgDd.svg';

import './styleListEvents.css';

const ListEvent = () => {
    return (
        <div>
            <Topbar/>

            <div id="bodyListEvent">
                <Poster name="Eventos" />

                <div id="buttonAdEvent">
                    <div id="sombra">
                        <h2>Publicar evento</h2>
                    </div>
                </div>

                <hr className="hrlistEvent"/>

                <div id="listsEvents">
                    <ListGame nameListGame="Duelo De Cartas" imgListGame={imgDuel}/>
                    <ListGame nameListGame="Juegos Arcade" imgListGame={imgArcade}/>
                    <ListGame nameListGame="Juegos De Mesa" imgListGame={imgDd}/>
                </div>

            </div>

        </div>
    )
}

export default ListEvent
