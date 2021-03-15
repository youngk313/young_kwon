import { Component } from 'react';
import Neural from './neuralNet';
import '../CSS/home.css';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    componentDidMount() {
        this.setState({
            open: true,
        });
    }

    render() {
        return(
            <div id='greeting' className="content-wrap">
                <Grow in={this.state.open}>
                    <Typography variant="h5" display='block'>
                        <Box fontSize={32} m={2}>
                            Welcome!
                        </Box>
                        <Box fontSize={18}>
                        My name is Young and I am a developer who is enthusiastic about machine learning, renewable energy, and web development.
                        </Box>
                    </Typography>
                </Grow>
                <Neural/>
            </div>
        )
    }
}

export default Home
