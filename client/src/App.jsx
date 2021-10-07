import { Component } from 'react';
import './Stylesheets/App.scss';
// import Container from './Components/Container' // for weather
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';

import BasicInfo from './Components/BasicInfo';
import Education from './Components/Education';
import Skill from './Components/Skill';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Preview from './Components/Preview';


class App extends Component{
  render() {
    return(
      // Resume Maker
      <Router>
        <Header />
        <div>
          <Route exact path='/' component={BasicInfo} />
          <Route path='/education' component={Education} />
          <Route path='/skill' component={Skill} />
          <Route path='/experience' component={Experience} />
          <Route path='/project' component={Project} />
          <Route path='/preview' component={Preview} />
        </div>
      </Router>

      // Weather
      // <div className="App">
      //   <Container/>
      // </div>
    )
  }
}


export default App;
