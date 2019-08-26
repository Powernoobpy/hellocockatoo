import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Onlinetop from './onlinetop';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Contents from './Contents';


function App() {
  return (
    <div className="Bg" >
      <Onlinetop/>
      <Navbar/>
      <Header/>
      <Contents/>
      
    </div>
  );
}

export default App;
