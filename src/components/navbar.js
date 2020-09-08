import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

export class NavigationBar extends Component {
    render() {
        return (
            <div className="">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to='/'> Home</Nav.Link>
                            <Nav.Link as={Link} to='/lifeInsurance'> Life Insurance</Nav.Link>
                            {/*<Nav.Link to='/'> Medical Aid</Nav.Link>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
