
import './App.css';
import React from 'react';
import MovieList from "./components/MovieList";
import  { useState} from 'react';
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import { BrowserRouter, Route } from 'react-router-dom';
import Trailer from "./components/Trailer"
import Home from "./components/Home"
import ReadMore from "./components/ReadMore"
function App (){


  return (
    <div className="App" >
     

<Route exact path="/" component={Home} />
<Route  path="/trailer" component={Trailer}/>
<Route path= "/readMore" component={ReadMore}/>

  
    </div>
  );
}


export default App;
