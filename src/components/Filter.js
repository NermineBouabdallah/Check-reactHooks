import React from "react";

import ReactStars from "react-rating-stars-component";

const Filter = ({searchText,searchRate}) => {
  


  return (
    <div className="App" >
        <input  className="search" 
          
          onChange={(e)=>searchText(e.target.value)}
          type="text"
        />
     
        <button    className="B" type="submit" value="Search"> search</button>
        <ReactStars
    count={5}
    onChange={(newRating)=>searchRate(newRating)}
    size={24}
    activeColor="#ffd700"
  />
      </div>
    ); 
}

export default Filter;