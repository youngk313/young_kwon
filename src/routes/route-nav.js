import { Component } from 'react';
import { Link } from 'react-router-dom';
import App from './../App';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import * as ROUTES from './routes';

class Navigation extends Component {
    render() {
        return(
            <div style={{width:'100%'}}>
                <List component="nav">
                    <ListItem component={Link} to={ROUTES.HOME} button>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem component={Link} to={ROUTES.COURSE} button>
                        <ListItemText primary="Courses"/>
                    </ListItem>
                    <ListItem component={Link} to={ROUTES.QUIZ} button>
                        <ListItemText primary="Quiz"/>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Navigation