import { Component } from 'react';

import Card from '@material-ui/core/Card';
import Paper from "@material-ui/core/Paper";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';

import Image from 'material-ui-image';

import '../CSS/projects.css';
import PickrImage from "../images/pickr_snapshot.png"
import Electron from "../images/electron_light.jpg"
import BotPic from '../images/discord_bot.png'

class Projects extends Component {
    render() {
        return(
            <div className="root">
                <div className="headings">
                    <Typography variant="h4" >
                        Projects
                    </Typography>
                </div>
                <Grid container spacing={1}>
                    <Grid item sm={3}>
                        <Zoom in={true} timeout={1000}>
                        <Card className="card"> 
                            <CardHeader title="WatchMaL"/>
                            <CardMedia
                                className="media"
                                image={Electron}
                                title="pickr"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary"component="p">
                                    Adjusted machine learning program to predict energy levels based on particle collsion data. 
                                </Typography>
                            </CardContent>
                        </Card>
                        </Zoom>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item sm={3}>
                        <Card className="card"> 
                            <CardHeader title="Pickr"/>
                            <CardMedia
                                className="media"
                                image={PickrImage}
                                title="pickr"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary"component="p">
                                    Built a web application using React that suggests local activities based on the users' preferences. This project was voted as the 'Most Useful' application in the BCIT COMP2930 Project Course. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={3}>
                        <Card className="card"> 
                            <CardHeader title="CodeBuddy"/>
                            <CardMedia
                                className="media"
                                image={BotPic}
                                title="pickr"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary"component="p">
                                    Created a Discord Bot capable of moderating comments, searching Wikipedia, playing a game of BlackJack, and polling.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={3}>
                        <Card className="card"> 
                            <CardHeader title="Dynamic Quiz Generator"/>
                            <CardMedia
                                className="media"
                                image={PickrImage}
                                title="pickr"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary"component="p">
                                    
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Projects
