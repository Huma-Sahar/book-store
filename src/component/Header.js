import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand className='fw-bold text-danger' to="#home ">Book Store</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink className='navs' to="/">Home</NavLink>
                            <NavLink className='navs' to="/list">List</NavLink>
                            <NavLink className='navs' to="/about">About</NavLink>
                            
                        </Nav>
                    </Container>
                </Navbar>


            </>

        </div>
    )
}

export default Header
