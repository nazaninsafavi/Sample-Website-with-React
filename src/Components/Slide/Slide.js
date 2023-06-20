import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel';
import './Slide.css'

export default class Slide extends Component {
  render() {
    return (
      <>
        <Carousel className='carousel'>
            <Carousel.Item className='carousel-Item'>
              <div>
                <img
                  className="d-block w-100 slide-img"
                  src="./weiler-photography-3.jpg"
                  alt="First slide"
                  />
                  <div className='left-one'>
                    <p className='text-above'>Bold and Beautiful</p>
                  </div>
                  <div className='left-two'>
                    <p className='text-bottom'>This is a place for adding some text.This is a place for adding some text.
                    This is a place for adding some text.This is a place for adding some text.This is a place for adding some text.
                     </p>
                  </div>

              </div>
            </Carousel.Item>
        </Carousel>
      </>
    )
  }
}
