import React, { useEffect, useState } from 'react';
import './styleListGame.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const ListGame = (props) => {

    const [listaDuelos, setListaDuelos] = useState();
    const [listaarcade, setListaArcade] = useState();
    const [listaMesa, setListaMesa] = useState();

    useEffect(() => {
        const eventosRef = firebase.database().ref('UsuarioEventos');

        eventosRef.on('value', (snapshot) => {
            const eventos = snapshot.val();
            const arrayEventos = [];
            for (let id in eventos) {
                Object.assign(eventos[id].evento, {id: id});
                arrayEventos.push(eventos[id].evento); 
            }
            console.log(`arrayEventos`, arrayEventos)
            const duelos = (arrayEventos||[]).filter(even => even.categoria == 'duelo');
            const arcade = (arrayEventos||[]).filter(even => even.categoria == 'clasico');
            const mesa = (arrayEventos||[]).filter(even => even.categoria == 'mesa');

            setListaArcade(arcade);
            setListaDuelos(duelos);
            setListaMesa(mesa);
        });
        
    }, []);


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
                            <Link to="/event">
                                <div id="componente">
                                    {listaDuelos && props.tipoList == 'duelos' && listaDuelos.map((duelo) => (
                                        <Link to={`/event/${duelo.id}`} id="listaduelos">
                                            {console.log(`datos.evento.titulo`, duelo.titulo)}
                                            <h4>{duelo.titulo}</h4>
                                        </Link>
                                    ))}
                                    {listaarcade && props.tipoList == 'clasicos' && listaarcade.map((arcade) => (
                                        <Link to={`/event/${arcade.id}`} id="listaarcade">
                                            {console.log(`datos.evento.titulo`, arcade.titulo)}
                                            <h4>{arcade.titulo}</h4>
                                        </Link>
                                    ))}
                                    {listaMesa && props.tipoList == 'mesa' && listaMesa.map((mesa) => (
                                        <Link to={`/event/${mesa.id}`} id="listamesas">
                                            {console.log(`datos.evento.titulo`, mesa.titulo)}
                                            <h4>{mesa.titulo}</h4>
                                        </Link>
                                    ))}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr id="endHr" />
        </div>
    )
}

export default ListGame
