import React from 'react'
import { Row,Col } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="header">
                   <Row>
    <Col xs={3} md={4}>
     Company Logo
    </Col>
    <Col xs={3} md={4}>
     Search
    </Col>
    <Col xs={6} md={4}>
      Home
    </Col>
  </Row>
                </div>
                
        </div>
        </div>
    )
}

export default Header
