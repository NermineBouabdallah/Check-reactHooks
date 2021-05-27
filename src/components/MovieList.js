import React from 'react'
import Card from "./Card"
import './../App.css';




function MovieList({movies,text,rate}) {
console.log(movies.rating)
    return (
        <div>
            <h1 className="h" style={{ fontSize:40}}>
                Movies
            </h1>
            <div className="carte">
            {movies.filter(el=>el.title.toLowerCase().includes(text.toLowerCase()) && el.rating>= rate).map(el => <Card movie = {el} />)}

     </div>
    
    </div>
    )}

export default MovieList
