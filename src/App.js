import './App.css';
import { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import RouteMaster from './routes/route-paths';
import AppBar from './AppBar';

import Paper from '@material-ui/core/Paper';

import bgImage from './images/background_photo.jpg';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">
        <AppBar/>
        <div>
          <Router>
            <RouteMaster />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
