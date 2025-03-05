import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const MemeCard = (props) =>{

    const navigate = useNavigate();

    return(
        <Card style={{ width: '18rem', margin: "25px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" onClick={e => navigate(`/edit?url=${props.img}`)}>Edit</Button>
      </Card.Body>
    </Card>
    );
};

export default MemeCard;