import React, { Component } from "react"
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const styles = {
    collapse:{
        backgroundColor:"#646B6F",
        height:"90px",
        color:"white"

    },
    link:{
        color:"white",
        fontSize:"20px"
    }


}

function Menu() {
    return (

        <Navbar bg="light" expand="lg">

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"style={styles.collapse}>
                <Nav className="ml-auto">

                    <Nav.Link style={styles.link} href="/">Inicio</Nav.Link>
                    <Nav.Link style={styles.link} href="/alta">Registro</Nav.Link>
                    <Nav.Link style={styles.link} href="/login">Login</Nav.Link>
                    <Nav.Link style={styles.link} href="/admin">Productos</Nav.Link>

                </Nav>

            </Navbar.Collapse>

        </Navbar>

    )
}

export default Menu;
