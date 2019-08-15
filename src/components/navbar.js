import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import google from './images/7-512.png'
import Image from 'react-bootstrap/Image'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Alert from 'react-bootstrap/Alert'
// import {Link} from 'react-router-dom'



function navbar(){
    return(
        <Navbar bg="transparent" className="ml-5" expand="lg">
            <Navbar.Brand href="#home" style={colorText}>SMART</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" style={colorText}>Home</Nav.Link>
                    <Nav.Link href="#link" style={colorText}>Link</Nav.Link>
                </Nav>
                <Nav className="mr-auto justify-content-md-end">
                    <div className="">
                        <ul class="navbar-nav ar-auto">
							<li>
                                <Nav.Link href="https://www.facebook.com/"><Image src={Facebook} height="30" width="30" alt="facebook" /></Nav.Link>
							</li>
                            <li>
                                <Nav.Link href="#home"><Image src={twitter} height="30" width="30" alt="twitter" /></Nav.Link>
							</li>
                            <li>
                                <Nav.Link href="#home"><Image src={google} height="30" width="30" alt="google+" /></Nav.Link>
							</li>
						</ul>   
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const colorText = {
    color:"white",
    fontSize:"20px",
    marginLeft:"40px"
}
export default navbar
