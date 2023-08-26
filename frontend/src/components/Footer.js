import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>ProShop &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer