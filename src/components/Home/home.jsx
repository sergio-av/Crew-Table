import React, { useState, useEffect } from 'react'
import Topbar from '../common/TopBar/topbar'
import Footer from '../common/Footer/Footer'
import Poster from '../common/Poster/poster';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import './styleHome.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 565,
        margin: 'auto',
        marginTop: 20,
    },
});

const Home = () => {

    const classes = useStyles();

    const [boardGames, setBoardGames] = useState([]);

    useEffect(() => {
        fetch('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV').
            then(respuesta => respuesta.json()).
            then(data => setBoardGames(data.games)).
            catch(error => alert(`error`, error));

    }, [])

    return (
        <div >
            <Topbar />
            <div id="all">
                <div id="titulo">
                    <Poster name="Lista de Juegos" />
                </div>
                {boardGames?.map((game) => (
                    <div id="cartas">
                        <Card id="carta" className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    id="imgCard"
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="480"
                                    image={game.image_url}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {game.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Precio: {game.price}€    <a href={game.url}> mas info </a>
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default Home
