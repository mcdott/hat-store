import React, {Component, MouseEvent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {Link } from 'react-router-dom'
import './Header.css'

interface Props {}

const Header: React.FC<Props> = () => {

     const handleClick = () => {
      window.location.href='/products'
     }

    return (
    <Container className='header_container'>
      <Row>
        <Col lg='6' md='6' className='center'>
        <section className="header_content">
          <h2 className='header_title'>Dan's Hats</h2>
          <p> Only the greatest of hats</p>
              <div className='button_container'>
              <Link to = "/products">
                <button 
                onClick={handleClick}
                className="buy_btn">
                  Buy now
                </button></Link>
              </div>   
            </section>
            </Col>
          </Row>
        </Container>
    )
     }


export default Header
