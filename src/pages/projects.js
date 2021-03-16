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
import { shadows } from '@material-ui/system';

import Image from 'material-ui-image';
import VisibilitySensor from 'react-visibility-sensor';

import '../CSS/projects.css';
import PickrImage from "../images/pickr_snapshot.png"
import Electron from "../images/electron_light.jpg"
import BotPic from '../images/discord_bot.png'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transition: false
        }
        this.triggerTransition = this.triggerTransition.bind(this);
    }

    triggerTransition() {
        if (window.scrollY > 102) {
            this.setState({
                transition: true
            });
        } else {
            this.setState({
                transition: false
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.triggerTransition);   
    }

    componentDidMount() {
        window.addEventListener("scroll", this.triggerTransition);   
    }

    componentDidUpdate() {
        window.addEventListener("scroll", this.triggerTransition);
    }

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
                        <Zoom in={this.state.transition} timeout={1000}>
                        <Card className="card" boxShadow={3}> 
                            <CardHeader title="WatChMaL"/>
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
                    <Grid item sm={3}>
                        <Zoom in={this.state.transition} timeout={1200}>
                            <Card className="card"> 
                                <CardHeader title="Pickr" className="card_comp"/>
                                <CardMedia
                                    className="media"
                                    image={PickrImage}
                                    title="pickr"
                                />
                                <CardContent className="card_comp">
                                    <Typography variant="body2" color="textSecondary"component="p">
                                        Built a web application using React that suggests local activities based on the users' preferences. This project was voted as the 'Most Useful' application in the BCIT COMP2930 Project Course. 
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item sm={3}>
                        <Zoom in={this.state.transition} timeout={1400}>
                            <Card className="card"> 
                                <CardHeader title="CodeBuddy"/>
                                <CardMedia
                                    className="media"
                                    image={BotPic}
                                    title="pickr"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary"component="p">
                                        A Discord Bot that can moderate comments, search Wikipedia, play a game of BlackJack, and poll all with a simple command.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item sm={3}>
                        <Zoom in={this.state.transition} timeout={1600}>
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
                        </Zoom>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Projects
