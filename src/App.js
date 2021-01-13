import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import RouteMaster from './routes/route-paths';
import Navigation from './routes/route-nav';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello there, <br/>
            My name is Young. <br/>
          </p>
        </header>
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
