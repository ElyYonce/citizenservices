import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class LeftNav extends React.Component {

    render(){
        return (
        <div className="Menu">
           <Link className = "MenuItem" to="/">Available Services</Link>
           <Link className = "MenuItem" to="/worklist">Worklist</Link>
           <Link className = "MenuItem" to="/reports">Reports</Link>
        </div>
        );
    }
}

export default LeftNav;