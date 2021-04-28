//import './App.css';
import React from 'react';
import Mamaison from './Mamaison.js';


class App extends React.Component {
title="Mes logements"



  render() 
  {
  return (
    <div className="App">
      <h1 className="titre"> {this.title} </h1>
      <Mamaison />

    </div>
  );
}
}


export default App;
