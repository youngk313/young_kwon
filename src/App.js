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
        <Router>
        <AppBar/>
          <div id="content">
              <Route exact path={ROUTES.HOME} component={Home}/>
              <Route exact path={ROUTES.PROJECTS} component={Projects}/>
          </div>
        </Router>
 
      </div>
    );
  }
}

export default App;
