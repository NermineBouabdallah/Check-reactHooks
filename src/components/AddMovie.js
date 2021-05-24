import React from 'react'
import  { useState } from 'react';
import {Modal,Button} from "react-bootstrap"
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddMovie({addM}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
const [film,setFilm]= useState([])

 
     const handleChange=(event)=> { 
        setFilm(film=>({...film,[event.target.name]:event.target.value})
        )}
      
     
   
    return (
        <div className="mod">
            

            <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <div >
                <div className="tit">
                <label> Title:</label>
            <input className="in" type="text" name="title" onChange={handleChange}/> 
            </div>
             <div className="tit">
            <label> Description:</label>
            <input className="in1" type="text" name="description"  onChange={handleChange}/>
            </div>
            <div className="tit">
            <label> Image:</label>
            <input className="V" type="text" name="image" onChange={handleChange} />
            </div>
            <div className="tit">
            <label> Rating:</label>
            <input className="H" type="text" name="rating" onChange={handleChange} />
            </div>
            </div>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newMovie=>addM(film)}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie

