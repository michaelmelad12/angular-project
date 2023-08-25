import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../ass/slider1.jpg';
import slider2 from '../ass/slider2.jpg';
import slider3 from '../ass/slider3.jpg';
import "./Slider.css"
export default class Slider extends Component {
  render() {
    return (
      <>
        {/* <Carousel className="Slider-container h-50 w-5 " >
          <Carousel.Item>
            <img
              className="d-block w-70"
              src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70"
              src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoZXMlMjBzaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70"
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3RoZXMlMjBzaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        <div id="carouselExampleSlidesOnly" class="carousel slide d-block w-100 h-40" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slider1} className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item">
                <img src={slider2} className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item">
                <img src={slider3} className="d-block w-100" alt=""/>
              </div>
            </div>
          </div>
        {/* <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoZXMlMjBzaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="d-block w-70" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoZXMlMjBzaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="d-block w-70" alt="..." />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3RoZXMlMjBzaG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="d-block w-70" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        {/* <div>Hello</div> */}
      </>
    )
  }
}
