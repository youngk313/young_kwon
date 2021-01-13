import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './route-nav';
import * as ROUTES from './routes';

import Home from './../pages/home';
import Quizlet from './../pages/quiz';
import Courses from './../pages/course';


import './../CSS/style.css';

function RouteMaster() {
    return(
        <div>
            <Grid container>
                <Hidden smDown>
                    <Grid item xs={2}>
                        <Navigation />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6}>
                    <div id="content">
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route path={ROUTES.COURSE} component={Courses}/>
                        <Route path={ROUTES.QUIZ} component={Quizlet}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default RouteMaster