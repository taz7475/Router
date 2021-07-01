import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Stars from 'react-rating-stars-component'
import "./MovieCard.css"
import { Card,Button } from "react-bootstrap";
import {Link} from "react-router-dom"

const MovieCard = ({ movieCard }) => {
  return (
    <div>
            <Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src={movieCard.posterUrl} />
  <Card.Body>
    <Card.Title>{movieCard.title}</Card.Title>
    <Card.Text>
     {movieCard.description}
    </Card.Text>
    <Card.Text>
     {movieCard.year}
    </Card.Text>
    <Card.Text>
    <Stars
    count={5}
    value={movieCard.rate}
    size={24}
    activeColor="#ffd700"
  />
    </Card.Text>
    <Button variant="primary">Download </Button>
  </Card.Body>
</Card>
<Link to={`/description/${movieCard.id}`}><button>Description</button></Link>
    </div>
  );
};

export default MovieCard;
