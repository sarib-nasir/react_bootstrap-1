import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "react-router-dom/Link"
// import Nav from 'react-bootstrap/Nav'
import Facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import google from './images/7-512.png'
import Image from 'react-bootstrap/Image'
function footer(){
    return(
        <section style={backgroundColor} className="pt-5 pb-5">
            <Container style={textTransform} >
                <Row>
                    <Col sm={5} style={border}>
                        <h3>SMART</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur possimus, repudiandae a facere adipisci rerum at maxime vel. Assumenda hic ea consequatur deserunt nesciunt a eius sit? Reprehenderit, maiores.</p>
                        <div >
                        <a href="#sasa"><Image src={Facebook} height="30" width="30" alt="facebook" /></a>
                        <a href="#sasa"><Image src={twitter} height="30" width="30" alt="twitter" /></a>
                        <a href="#sasa"><Image src={google} height="30" width="30" alt="google+" /></a>
						
                            {/* <Nav.Link href="https://www.facebook.com/"><Image src={Facebook} height="30" width="30" alt="facebook" /></Nav.Link>
                            <Nav.Link href="#home" className="text-left"><Image src={twitter} height="30" width="30" alt="twitter" /></Nav.Link>
                            <Nav.Link href="#home"><Image src={google} height="30" width="30" alt="google+" /></Nav.Link> */}
                        </div>
							
                    </Col>
                    <Col sm={2} style={border} className="text-center text-white">
                        <Link href="#product">Product</Link><br/>
                        <Link href="#About">About</Link><br/>
                        <Link href="#Portfolio">Portfolio</Link><br/>
                        <Link href="#Team">Team</Link><br/>
                        <Link href="#Service">Service</Link><br/>
                        <Link href="#Contact">Contact</Link><br/>
                    </Col>
                    <Col sm={5}>
                        <p>all rights reserve to atles pics agency</p>
                        <Button size="sm" style={btns} href="#subscribe" variant="outline-secondary">subscribe</Button>
                    </Col>
                </Row>
            </Container>
        </section> 
    
    )
}
const btns ={
    borderRadius:"20px",
    marginRight:"10px",
}
const backgroundColor ={
    backgroundColor:"#3e3d4c",
    
}
const textTransform = {
    color:"#fff",
    fontSize:"12px",
}
const border = {
    borderRight:"1px solid white"
}
// const text = {
//     display:"flex",
//     flexDirection:"left"
// }
export default footer
