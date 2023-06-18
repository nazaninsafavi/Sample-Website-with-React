import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Search.css'
import {Form,Button} from 'react-bootstrap'

export default class Search extends Component {
  render() {
    return (
          <>
            <div className='p-2 search'>Search:</div>
            <Form className="d-flex form">
                <Form.Control
                  type="search"
                  size="sm"
                  placeholder="Search"
                  //className="me-2"
                  aria-label="Search"
              />
                <Button className='btn'>
                 <i class="material-icons searchbtn">search</i>
                </Button>
            </Form>
            <div className='desc'>You can use as many different widgets in this area as you want.
             This example text is added here using default WordPress text widget. 
             This widget can be enabled via Appearance Widgets.</div>


          </>
        

    )
  }
}
