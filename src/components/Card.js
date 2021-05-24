import React from 'react'
import {Card} from "react-bootstrap"
import StarRatingComponent from 'react-star-rating-component';
import ReactStars from "react-rating-stars-component";

function CardM({movie }) {
    return (
        <div>
            <Card className="cartee" style={{ width: '18rem' }} >
<Card.Img className="I"variant="top" style={{width:270, height:350}} src={movie.poster} />
<Card.Body>
 <Card.Title className="red">{movie.title} </Card.Title>
 <Card.Text style={{ color:"black",fontSize:17, fontWeight:500}}>
   {movie.description}
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
