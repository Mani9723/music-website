import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody'
import InstrumentCards from './components/InstrumentCards'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainBody />
        <InstrumentCards />
      </Router>
    </>
  );
}

export default App;
