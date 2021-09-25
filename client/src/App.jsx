import { Component } from 'react';
// import logo from './logo.svg';
import './Stylesheets/App.scss';
// import Container from './Components/Container'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import BasicInfo from './Components/BasicInfo';


class App extends Component{
  render() {
    return(
      // 
      <Router>
        <div>
          <Route exact path='/' component={BasicInfo} />
        </div>
      </Router>
    )
  }
}

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
//   );
// }

export default App;
