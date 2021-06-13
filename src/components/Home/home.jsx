import React, { useState, useEffect } from 'react'
import Topbar from '../common/TopBar/topbar'
import Footer from '../common/Footer/Footer'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import db from '../../utils/firebasejeConfig';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const Home = () => {

    const classes = useStyles();

    const [boardGames, setBoardGames] = useState([]);

    useEffect(() => {
        fetch('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV').
            then(respuesta => respuesta.json()).
            then(data => setBoardGames(data.games)).
            catch(error => console.log(`error`, error));

    }, [])

    return (
        <div>
            <Topbar />
            <h1>Home</h1>
            <button>A</button>
            {boardGames?.map((game) => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={game.image_url}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {game.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {game.price}€
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            <Footer />
        </div>
    )
}

export default Home
