import { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import '../CSS/projects.css';
import PickrImage from "../images/pickr_snapshot.png"
import Electron from "../images/electron_light.jpg"

class Projects extends Component {
    render() {
        return(
            <div className="root">
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6}>
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
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} md={6}>
                        <Card className="card"> 
                            <CardHeader title="Wave Simulation"/>
                            <CardMedia
                                className="media"
                                image={PickrImage}
                                title="pickr"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary"component="p">
                                    Created a fluid mechanics program using MATLAB to simulate waves in a closed container.
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
