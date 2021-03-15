import { Component } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import * as ROUTES from './routes';

const flexContainer = {
    display:'flex',
    flexDirection:'row',
    padding: 0,
    color: '#0b0C10',
    fontWeight: 'bold'
}

class Navigation extends Component {
    render() {
        return(
            <div style={{float: 'left'}}>
                <List component="nav" style={flexContainer}>
                    <ListItem component={Link} to={ROUTES.HOME} button>
                        <ListItemText primary="Home" />
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