import React from 'react';
import HomePage from "./pages/home"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
  
     <BrowserRouter>
      <Switch>
      <Route path="/" component={HomePage}/>
      </Switch>
      </BrowserRouter>
  
  );
}

export default App;
