import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard'


function Home() {
  
  return (
    <>
    
      <div className='home p-2' style={{width:"80%"}}>
        <Container>
            <Row>
                <Col><ProductCard /></Col>
                <Col><ProductCard /></Col>
                <Col><ProductCard /></Col>
            </Row>
        </Container>
       
            
      </div>
    </>
  )
}

export default Home
