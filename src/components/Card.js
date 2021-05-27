import React from 'react'
import {Card} from "react-bootstrap"

import ReactStars from "react-rating-stars-component";
import {BrowserRouter, Link} from 'react-router-dom';
function CardM({movie }) {
    return (
        <div>
            <Card className="cartee" style={{ width: '18rem' }} >
<Card.Img className="I"variant="top" style={{width:285, height:350}} src={movie.poster} />
<Card.Body>
 <Card.Title className="red">{movie.title} </Card.Title>
 <Card.Text style={{ color:"black",fontSize:17, fontWeight:500}}>
   {movie.description}
 </Card.Text>
 <Card.Text className="trailer">
     
     <Link to={{pathname:"/trailer", Props:{url:movie.URL,title:movie.title}}}> Watch trailer</Link>
     <Link to={{pathname:"/readMore", Props:{read:movie.read,title:movie.title}}}> <button className="bb"> Read More</button></Link>

    
   
 </Card.Text>
 <Card.Text >
 <ReactStars
    count={5}
    
    size={24}
    activeColor="#ffd700"
    edit={false}
  
 value={movie.rating}/>
 
 </Card.Text>
 
</Card.Body>
</Card>

        </div>
    )
}

export default CardM
