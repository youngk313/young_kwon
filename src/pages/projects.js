import { Component } from 'react';

import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import { shadows } from '@material-ui/system';

import '../CSS/projects.css';
import PickrImage from "../images/pickr_snapshot.png"
import Electron from "../images/electron_light.jpg"
import BotPic from '../images/discord.gif'
import QuizGif from '../images/quiz.gif'

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
                <Grid container spacing={3}>
                    <Grid item sm={3}>
                        <Zoom in={this.state.transition} timeout={1000}>
                        <Card className="card" boxShadow={3}> 
                            <Link href="https://github.com/youngk313/WatChMaL" underline="none" color="textPrimary" rel="noopener" target="_blank">
                                <CardHeader title="WatChMaL" className="card_comp"/> 
                            </Link>
                            <CardMedia
                                className="media"
                                image={Electron}
                                title="pickr"
                            />
                            <CardContent className="card_comp"> 
                                <Typography variant="body2" color="textSecondary"component="p">
                                    Machine learning program that can predict energy levels based on particle collision data using a regressive neural network. 
                                </Typography>
                            </CardContent>
                        </Card>
                        </Zoom>
                    </Grid>
                    <Grid item sm={3}>
                        <Zoom in={this.state.transition} timeout={1200}>
                            <Card className="card"  boxShadow={3}> 
                            <Link href="https://pickr-dev.firebaseapp.com" underline="none" color="textPrimary" rel="noopener" target="_blank"><CardHeader title="Pickr" className="card_comp"/></Link>
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
                            <Link href="https://devpost.com/software/the-incredible-code-buddy" underline="none" color="textPrimary" rel="noopener" target="_blank"><CardHeader title="CodeBuddy"/></Link>
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
                            <Link href="https://young-u6.azurewebsites.net/" underline="none" color="textPrimary" rel="noopener" target="_blank"><CardHeader title="Dynamic Quiz Generator"/></Link>
                                <CardMedia
                                    className="media"
                                    image={QuizGif}
                                    title="pickr"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary"component="p">
                                        A dynamic quiz generator that stores questions and answers in a database. It can retrieve the data and list the questions and answers.
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
