import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footone'>
          <a className='link' href='#'>Sample Page</a>
          <a className='link' href='#'>Full-Width Page</a>
          <a className='link' href='#'>Page A</a>
          <a className='link' href='#'>Blog</a>
          <a className='link' href='#'>Front Page</a>

        </div>
        <div className='foottwo'>
          <span><a href='#'>Unite Demo</a>All rights reserved.</span>
          <span><a href='#'>Unite Theme</a>Powered by <a href='#'>Word press</a></span>
        </div>

      </div>
    )
  }
}
