import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class CSHeader extends React.Component {

    render(){
        return (
      <div>
        <header className="App-header">
           <h1>Citizen Services</h1>
        </header>
      </div>
        );
    }
}

export default CSHeader;