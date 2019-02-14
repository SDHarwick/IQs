import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SchoolsList from './SchoolsList';

const schools = require('./schools.json');

console.log(schools);




// First Goal
// Create UI to parse csv and display the ID and College Name and have image 
// thumbnail display next to proper College ID



class App extends Component {

//  SchoolsContainer(schools) {

//   console.log(typeof schools);
//   // for (let i = 1; i <= schools.length; i++ ){
//   //   console.log(schools[i]);
//   // }

//   render() {

//   // return schools.map(({ID, School}) => {
//   //   return(
//   //     <ul>
//   //       <li>{ID}</li>
//   //     </ul>
//   //     ); 
    
//   // });
//   }
// }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SchoolsList>
        </SchoolsList>
        <BrowserRouter>
          <div className="container">
            {//<Route exact path="/" component={} />
          }
            {//<Route path="/next-route" component={} />
          }
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
