import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './route-nav';
import * as ROUTES from './routes';

import Home from './../pages/home';
import Projects from './../pages/projects';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './../CSS/style.css';

function RouteMaster() {
    return(
        <div>
            <Grid container>
                <Grid item xs={2}>
                    <Hidden mdDown>
                        <Navigation />
                    </Hidden>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div id="content">
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route exact path={ROUTES.PROJECTS} component={Projects}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default RouteMaster