import React, {Component, MouseEvent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {Link } from 'react-router-dom'
import './CartHeader.css'

class CartHeader extends Component{ 

  constructor(props:any){
         super(props);
         this.routeChange = this.routeChange.bind(this);
     }

     routeChange(e: MouseEvent<HTMLButtonElement>){
      e.preventDefault();
      alert('route')
     }

     render(){
         return (
          <Container className='cart_container'>
            <Row>
             <Col lg='6' md='6' className='center'>
              <section
              className="cart_header">
                  </section>
                  </Col>
                </Row>
              </Container>
           
         )
     }
}

export default CartHeader
