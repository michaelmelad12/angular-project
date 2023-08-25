import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import webshop from '../ass/webshop.png';
import {GiClothes} from 'react-icons/gi'
import {FcShop} from 'react-icons/fc'
import {FcHome} from 'react-icons/fc'
import {MdRoundaboutRight} from 'react-icons/md'
import {MdProductionQuantityLimits,MdLogin} from 'react-icons/md'
import {IoIosContacts} from 'react-icons/io'
export default class MyNav extends Component {
  render() {
    return (
      <>
      
        <Navbar bg="light" expand="lg" className=" ">
          <Container >
            <br/>
            <Navbar.Brand className='pl-2'> <FcShop className='mr-ml-2 '></FcShop> <GiClothes></GiClothes> <i><b>Kagualino </b> </i> </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='ml-0'>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '150px' }}
                navbarScroll
              >
                <Nav.Link href="./Home" className="me-auto mx-5 my-2 pl-4 mr-50"><FcHome></FcHome> Home</Nav.Link>
                <Nav.Link href="./Home" className="me-auto my-2 mx-5"><MdRoundaboutRight></MdRoundaboutRight> About us</Nav.Link>
                <NavDropdown  title="Products" id="navbarScrollingDropdown" className=" mx-5 me-auto my-2"> 
                <MdProductionQuantityLimits ></MdProductionQuantityLimits>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled className="me-auto my-2 mx-5">
                  <IoIosContacts></IoIosContacts> contact us
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link href="./Login" className="me-auto mx-5 my-2 pl-4 mr-50"><MdLogin></MdLogin> Log in</Nav.Link>
            </Navbar.Collapse>
            
          </Container>
          <br />
          <br />
          <br />
        </Navbar>
      </>
    )
  }
}
