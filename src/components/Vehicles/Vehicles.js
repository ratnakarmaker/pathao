import React from 'react';
import { Card } from 'react-bootstrap';
import './Vehicles.css';
import { Link } from 'react-router-dom';

const Vehicles = (props) => {
    const { name, image, id } = (props.transport)
    return (
            <Card className="vehicle-card" >
                    <Card.Img variant="top" src={image} className="vehicle_img" />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        
                        <Link to={`/search/${id}`}><button>Next</button></Link>

                    </Card.Body>
                </Card>
    );
};

export default Vehicles;