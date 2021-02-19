import { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <ListItem component={Link} to={ROUTES.HOME} onClick={function(){console.log("Hello")}}button>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem component={Link} to={ROUTES.PROJECTS} button>
                        <ListItemText primary="Projects"/>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Navigation