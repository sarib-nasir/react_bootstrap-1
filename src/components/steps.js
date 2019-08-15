import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Image from "react-bootstrap/Image"
// import Bar1 from "./images/plan.jpg"
// import Bar2 from "./images/morning.jpg"

 function steps() {
    return (
        <section style={{width: "70%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginTop:"20px",
            marginBottom:"20px"}}> 
            <Container>
                <h2 style={{marginLeft:"125px"}}>Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit. Qui<br/>quam minus praesentiu.</h2>
            <Row  style={{width:"1022px"}} className="justify-content-center">
                <Col sm={3}>
                    <div style={circle}>
                        <p style={circle_p}>1</p>
                    </div>
                    <h5 className="text-capitalize " style={{marginTop:"70px"}}>web design</h5>
                    <p style={textTransform}>Lorem ipsum dolor <br/>sit amet consectetur <br/>adipisicing elit. Porro unde rerum distinctio consect<br/>etur facilis sit <br/>cupiditate ut possimus rem eaque facere, quidem voluptatem ipsum, o<br/>dio optio delectus mollitia! Po<br/>ssimus, qui.</p>
                </Col>
                <Col sm={3}>
                    <div style={circle}>
                        <p style={circle_p}>2</p>
                    </div>
                    <div>
                        <h5 className="text-capitalize " style={{marginTop:"70px"}}>app building</h5>
                        <p style={textTransform}>Lorem ipsum dolor <br/>sit amet consectetur <br/>adipisicing elit. Porro unde rerum distinctio consect<br/>etur facilis sit <br/>cupiditate ut possimus rem eaque facere, quidem voluptatem ipsum, o<br/>dio optio delectus mollitia! Po<br/>ssimus, qui.</p>
                    </div>
                </Col>
                <Col sm={3}>
                    <div style={circle}>
                        <p style={circle_p}>3</p>
                    </div>
                    <h5 className="text-capitalize " style={{marginTop:"70px"}}>event plan</h5>
                    <p style={textTransform}>Lorem ipsum dolor <br/>sit amet consectetur <br/>adipisicing elit. Porro unde rerum distinctio consect<br/>etur facilis sit <br/>cupiditate ut possimus rem eaque facere, quidem voluptatem ipsum, o<br/>dio optio delectus mollitia! Po<br/>ssimus, qui.</p>
                </Col>
            </Row>
            </Container>
        </section>
    )
}
const textTransform = {
    fontSize:"12px",
    marginTop:"10px"
}
const circle={
    position:"relative"
}
const circle_p={
    fontSize: "15px",
    border: "2px solid #6c757d",
    borderRadius: "50%",
    position: "absolute",
    paddingRight: "6px",
    paddingLeft: "6px",
    marginTop: "30px",
}
export default steps