import React from 'react'
import Navbar from './navbar'
import Button from 'react-bootstrap/Button'
import Background from './images/shutterstock.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function header(){
    return(
        <section style={backgroundImage}>
            <Navbar/>
            <div  className="mt-5">
                <Container >
                    <Row>
                        <Col sm={{ span: 6, offset: 1 }}>
                            <h2 class="text-white">we build email solutions<br/> that fits</h2>
                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Perferendis sequi optio vitae nulla odit</p>
                            <Button size="sm" style={btns} href="#home" variant="danger">get starter</Button>
                            <Button size="sm" style={btns} href="#read more" variant="outline-secondary">read more</Button>
                        </Col>
                    </Row>
                </Container>
			</div>
        </section> 
    
    )
}
const backgroundImage ={
    width:"100%",
    height:"350px",
    imageSize:"cover",

    background:`url(${Background}) center center no-repeat`
}
const btns ={
    borderRadius:"20px",
    marginRight:"10px",
}
// const spacing ={
//     marginLeft:"90px",
//     marginTop:"50px"
// }
export default header
