
import React from 'react';
import MovieList from "./MovieList";
import  { useState} from 'react';
import AddMovie from "./AddMovie";
import Filter from "./Filter";

import './../App.css';


function Home (){

const  [movies, setMovies]=useState([{
    title: "Barbie",
     description: "Animation Movie",
    poster: "https://flxt.tmsimg.com/assets/p18691673_p_v10_aa.jpg",
    rating : 3,
    URL:"https://www.youtube.com/embed/7joR5V_T3wQ",
    read:"Inspired by Mark Twain's fascinating novel, Princess Anneliese finds an unexpected friendship when she meets her humble look-alike, Erika. Will the Princess and the Pauper thwart the plans of the Queen's scheming advisor, Preminger?"
},
    {title : "Aladin" ,
    description : "Adventure Movie",
    poster : "https://fr.web.img3.acsta.net/pictures/19/04/19/09/29/4029006.jpg",
    rating : 4,
    URL:"https://www.youtube.com/embed/foyufD52aog",
    read:"A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
   

    },

    {title :"Home Alone",
  description : "Comedy Movie",
poster: "https://images-na.ssl-images-amazon.com/images/I/81EWrTadiJL._AC_SY741_.jpg",
rating : 5,
URL:"https://www.youtube.com/embed/5h9VDUNtoto",
read:"An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."},
{
  title: "Jeepers Creepers",
  description:"Horror Movie",
  poster:"https://i.pinimg.com/originals/68/62/c8/6862c883d119925c69bff4fcc966c324.jpg",
  rating:4,
URL:"https://www.youtube.com/embed/akFUWf5xe6k",
read:"A brother and sister driving home through isolated countryside for spring break encounter a flesh-eating creature which is in the midst of its ritualistic eating spree."},

  {
    title: "Beauty & the beast",
    description:"Adventure Movie",
    poster:"https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
    rating:4,
URL:"https://www.youtube.com/embed/e3Nl_TCQXuw",
read:"As punishment for his actions, a young prince is transformed into a monstrous beast by a mysterious enchantress. Only condition is if he can learn to love someone and earn their love in return, the curse will be lifted"},
    {
      title: "Titanic",
      description:"Romantic Movie",
      poster:"https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_R2012_original_film_art_5000x.jpg?v=1607475666",
      rating:4,
    URL:"https://www.youtube.com/embed/kVrqfYjkTdQ",
  read:"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."},
      {
        title: "Frozen",
        description:"Animation Movie",
        poster:"https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810",
        rating:3,URL:"https://www.youtube.com/embed/TbQm5doF_Uc",
      read:"When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."},

      {
        title: "Big Mommas",
        description:"Comedy Movie",
        poster:"https://i.pinimg.com/originals/5d/9b/11/5d9b11e4b1b067979484e28a467f2058.jpg",
        rating:4,
    URL:"https://www.youtube.com/embed/e3J29PNvIhY",
  read:"An FBI agent reprises his disguise as a corpulent old lady and takes a job as a nanny in a crime suspect's house."}
       
      

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


export default Home;
