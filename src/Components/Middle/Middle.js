import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Middle.css'

export default class Middle extends Component {
  render() {
    return (
      <>
        <div className='Middle-text'>
          <p className='paragraph'>This is a regular page and you can add any content here.</p>
        </div>
        <div className='Middle-text'>
          <p className='paragraph'>Slider is obtional and can be disabled.</p>
        </div>
        <div className='Middle-text'>
          <p></p>
        </div>
      </>
      
    )
  }
}
