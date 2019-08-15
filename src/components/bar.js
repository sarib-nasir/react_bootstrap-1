import React from 'react'
// import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Bar1 from "./images/plan.jpg"
import Bar2 from "./images/morning.jpg"

 function bar() {
    return (
        <section style={{width:"100%"}} className="bg-danger">
            <Row  style={{width:"1022px"}}>
                <Col sm={6} style={padding}>
                    <Image src={Bar1} alt="bar1" />
                </Col>
                <Col sm={5}>
                    <h3>Medium Text</h3>
                    <p style={textTransform}>Lorem ipsum dolor <br/>sit amet consectetur <br/>adipisicing elit. Porro unde rerum distinctio consect<br/>etur facilis sit <br/>cupiditate ut possimus rem eaque facere, quidem voluptatem ipsum, o<br/>dio optio delectus mollitia! Po<br/>ssimus, qui.</p>
                </Col>
            </Row>
            <Row style={{width:"1022px"}}>
                <Col sm={6} style={padding}>
                    <Image src={Bar2} alt="bar1" />
                </Col>
                <Col sm={5}>
                    <h3>Medium Text</h3>
                    <p style={textTransform}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde rerum distinctio consectetur facilis sit cupiditate ut possimus rem eaque facere, quidem voluptatem ipsum, odio optio delectus mollitia! Possimus, qui.</p>
                </Col>
            </Row>
        </section>
    )
}
const textTransform = {
    fontSize:"12px",
}
const padding={
    paddingLeft:"0px",
    paddingRight:"0px"
}
export default bar