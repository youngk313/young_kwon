import { Component } from 'react';
import Neural from './neuralNet';

class Home extends Component {
    
    render() {
        return(
            <div className="content-wrap">
                <div>Welcome! My name is Young and I am a developer who is enthusiastic about machine learning</div>
                <Neural/>
            </div>
        )
    }
}

export default Home
