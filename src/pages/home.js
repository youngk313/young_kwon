import { Component } from 'react';
import Neural from './neuralNet';

class Home extends Component {
    render() {
        return(
            <div className="content-wrap">
                <Neural/>
            </div>
        )
    }
}

export default Home