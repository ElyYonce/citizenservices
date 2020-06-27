import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CSHeader from './components/csheader/CSHeader';
import LeftNav from './components/leftnav/LeftNav';
import ActionArea from './components/actionarea/ActionArea';


function App() {
  return (
    <div className="App">
      <CSHeader />
        <div className="BodyArea">
          <LeftNav />
          <ActionArea />
        </div>
    </div>
  );
}

export default App;
