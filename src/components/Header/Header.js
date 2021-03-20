import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from './Pathao_Logo-.svg';
import "./Header.css";

const Header = () => {
    return (
        <Navbar className="d-flex justify-content-between" bg="light" variant="dark">
            <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
            <Nav>
                <Nav className="header"><Link  to="/home">Home</Link></Nav>
                <Nav className="header"><Link to="/login">Login</Link></Nav>
            </Nav>
        </Navbar>
    );
};

export default Header;