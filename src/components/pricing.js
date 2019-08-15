import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
function pricing() {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col sm={{span:10,offset:1}} className="text-center">
                    <h2>Pricing<span style={{color:"#dc3545"}}>.</span></h2>
                    <p style={textTransform}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloremque.m<br/> dolor sit amet consectetur adipisicing elit. Nihil, doloremque.</p>
                    <CardDeck  style={textTransform} className="pt-3">
                        <Card >
                            <Card.Header className="bg-danger text-white">
                                <h6>PRINCIPIANT</h6>
                            </Card.Header>
                            <Card.Body>
                                <h3><span style={{color:"#dc3545"}}>$</span>24</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tenetur molestias ea fugiat, at harum quos enim autem velit eius nihil.<br/>
                                <Button size="sm" style={btns} href="#conf" variant="danger">Submit</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className="bg-dark text-white">
                                <h6>PROFESSIONAL</h6>
                            </Card.Header>
                            <Card.Body>
                                <h3><span style={{color:"#dc3545"}}>$</span>48</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tenetur molestias ea fugiat, at harum quos enim autem velit eius nihil.<br/>
                                <Button size="sm" style={btns} href="#conf" variant="danger">Submit</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    )
}
const btns ={
    borderRadius:"20px",
    marginRight:"10px",
}
const textTransform = {
    fontSize:"12px",
}
export default pricing