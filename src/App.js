import './App.css';
import { Component } from 'react';
import AppBar from './AppBar';
import * as ROUTES from './routes/routes';

import Home from './pages/home';
import Projects from './pages/projects';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">
        <AppBar/>
          <div id="content">
              <Home/>
          </div>
          <div id="projects">
            <Projects/>
          </div>
 
      </div>
    );
  }
}

export default App;
