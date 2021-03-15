import { Component } from 'react';

import Card from '@material-ui/core/Card';
import Paper from "@material-ui/core/Paper";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Image from 'material-ui-image';

import '../CSS/projects.css';
import PickrImage from "../images/pickr_snapshot.png"
import Electron from "../images/electron_light.jpg"

class Projects extends Component {
    render() {
        return(
            <div className="root">
                <Grid container spacing={1}>
                    <Grid item sm={3}>
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
