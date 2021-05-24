
import './App.css';
import React from 'react';
import MovieList from "./components/MovieList";
import  { useState} from 'react';
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";

function App (){

const  [movies, setMovies]=useState([{
    title: "Barbie",
     description: "Animation Movie",
    poster: "https://flxt.tmsimg.com/assets/p18691673_p_v10_aa.jpg",
    rating : 3},
    {title : "Aladin" ,
    description : "Adventure Movie",
    poster : "https://fr.web.img3.acsta.net/pictures/19/04/19/09/29/4029006.jpg",
    rating : 4

    },

    {title :"Home Alone",
  description : "Comedy Movie",
poster: "https://images-na.ssl-images-amazon.com/images/I/81EWrTadiJL._AC_SY741_.jpg",
rating : 5},
{
  title: "Jeepers Creepers",
  description:"Horror Movie",
  poster:"https://i.pinimg.com/originals/68/62/c8/6862c883d119925c69bff4fcc966c324.jpg",
  rating:4},

  {
    title: "Beauty & the beast",
    description:"Adventure Movie",
    poster:"https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
    rating:4},
    {
      title: "Titanic",
      description:"Romantic Movie",
      poster:"https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_R2012_original_film_art_5000x.jpg?v=1607475666",
      rating:4},
      {
        title: "Frozen",
        description:"Animation Movie",
        poster:"https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810",
        rating:3},

      {
        title: "Big Mommas",
        description:"Comedy Movie",
        poster:"https://i.pinimg.com/originals/5d/9b/11/5d9b11e4b1b067979484e28a467f2058.jpg",
        rating:4}
       
      

  ])
  
  
  
  const [text,setText]=useState('')
 
  const [rate,setRate]=useState('1')

  const searchText=(text)=>{setText(text)}
  const searchRate=(rate)=>{setRate(rate)}


let add=(m)=>{
  setMovies(movies=>([...movies,m]))
}
  return (
    <div className="App" >
      <div className="head">
      <Filter  searchText={searchText} searchRate={searchRate} />
      </div>

     <MovieList movies ={movies} text={text} rate={rate}/>
     <AddMovie style={{height:150,width:100}}  addM={add}/>
    </div>
  );
}


export default App;
