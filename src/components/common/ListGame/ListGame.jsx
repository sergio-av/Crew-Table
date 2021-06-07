import React from 'react';
import './styleListGame.css';

const ListGame = (props) => {
    return (
        <div id="bodyListGame">
            <div id="headerList">
                <div>
                    <img src={props.imgListGame} alt="fondoCabecera" />
                </div>

                <div id="bodyList">
                    <div>
                        <h2>{props.nameListGame}</h2>

                        <div>
                            <div id="etiquetas">
                                <h3>Nombre</h3>
                                <h3>Fecha</h3>
                            </div>
                            <hr id="hrEtiquetas" />
                            <div id="componente">
                                <h4>Duelo de Yu Gi</h4>
                                <h4>22/07/2021</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr id="endHr"/>
        </div>
    )
}

export default ListGame
