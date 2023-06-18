import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Theme.css'
import { Button } from 'react-bootstrap'

export default class Theme extends Component {
  render() {
    return (
      <>
        <div className='d-flex flex-row justify-content-center'>
            <div className='p-2'>
                <h5>Unite WordPress Theme</h5>
                <p className='text-two'>If you like this awesome and completely free WordPress wedding theme you can download it by clicking on button below.
                    If you need any help with theme setup and configuration you might ask your question on Colorlib support forum.
                </p>
                <div className='d-grid gap-2' style={{paddingTop:'15px'}}>
                 <Button className='dbtn' variant="secondary" size="sm">Download Now!</Button>
                </div>
            </div>
        </div>    
      </>
    )
  }
}
