import React from 'react';
import { Card } from 'react-bootstrap';
import './Vehicles.css';
import { Link } from 'react-router-dom';

const Vehicles = (props) => {
    const { name, image, id } = (props.transport)
    return (
        <Link to={`/search/${id}`}>
            <Card className="h-100 d-flex align-items-center vehicle-card" >
                <Card.Img variant="top" src={image} className="vehicle_img" />
                <Card.Body className="d-flex align-items-center">
                    <Card.Title className="text-center"> {name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default Vehicles;