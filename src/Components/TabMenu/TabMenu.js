import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Tabs, Tab} from 'react-bootstrap';
import './TabMenu.css'

export default class TabMenu extends Component {
  render() {
    return (
      <>
        <Tabs defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3 Tabs"
        >
          <Tab eventKey="home" title="POPULAR" className='Tabscontent'>
              <div className='Img-Content'>
                <div className='d-flex flex-row'>
                  <div className='p-1'><img class="img-thumbnail img" src='./one.jpg'></img></div>
                  <div className='d-flex flex-column'>
                    <div className='txt-one'>Template: Paginated</div>
                    <div className='txt-two'>January 8,2012</div>
                  </div>
                </div>
              </div>
              <div className='Img-Content'>
                <div className='d-flex flex-row'>
                  <div className='p-1'><img class="img-thumbnail img" src='./two.jpg'></img></div>
                  <div className='d-flex flex-column'>
                    <div className='txt-one'>Post format: Gallery</div>
                    <div className='txt-two'>January 10,2014</div>
                  </div>
                </div>
              </div>
              <div className='Img-Content'>
                <div className='d-flex flex-row'>
                  <div className='p-1'><img class="img-thumbnail img" src='./three.jpg'></img></div>
                  <div className='d-flex flex-column'>
                    <div className='txt-one'>Markup : text Alignment</div>
                    <div className='txt-two'>January 9,2013</div>
                  </div>
                </div>
              </div>
            
          </Tab>
          <Tab eventKey="profile" title="RECENT" className='Tabscontent'>
          <div className='Img-Content'>
                <div className='d-flex flex-row'>
                  <div className='p-1'><img class="img-thumbnail img" src='./four.jpg'></img></div>
                  <div className='d-flex flex-column'>
                    <div className='txt-one'>Markup: Image Alignment</div>
                    <div className='txt-two'>May 9,2014</div>
                  </div>
                </div>
              </div>
              <div className='Img-Content'>
                <div className='d-flex flex-row'>
                  <div className='p-1'><img class="img-thumbnail img" src='./five.jpg'></img></div>
                  <div className='d-flex flex-column'>
                    <div className='txt-one'>Template: Comments</div>
                    <div className='txt-two'>February 1,2014</div>
                  </div>
                </div>
              </div>
              <div className='Img-Content'>
                <div className='d-flex flex-row'>
                  <div className='p-1'><img class="img-thumbnail img" src='./six.jpg'></img></div>
                  <div className='d-flex flex-column'>
                    <div className='txt-one'>Post Format : Gallery</div>
                    <div className='txt-two'>January 10,2014</div>
                  </div>
                </div>
              </div>
            
          </Tab>
          <Tab eventKey="contact" title="contact" className='Tabscontent'>
            <div className='contact'>
              <div className='d-flex flex-row justify-content-start'>
                <div className='p-1'><i class="material-icons" style={{fontSize:"20px"}} >question_answer</i></div>
                <div className='d-flex flex-column justify-content-center'>
                  <div className='txt'>Aigars on gallery</div>
                  <div className='txt'> Yes,you can do.</div>
                </div>
              </div>
            </div>
            <div className='contact'>
              <div className='d-flex flex-row justify-content-start'>
                <div className='p-1'><i class="material-icons" style={{fontSize:"20px"}} >question_answer</i></div>
                <div className='d-flex flex-column justify-content-center'>
                  <div className='txt'>zaheer shaikh on Bootstrap Shortcodes for Unite WordPress Theme</div>
                  <div className='txt'> I am completely fresher in this web site design and develop (...)</div>
                </div>
              </div>
            </div>
            <div className='contact'>
              <div className='d-flex flex-row justify-content-start'>
                <div className='p-1'><i class="material-icons" style={{fontSize:"20px"}} >question_answer</i></div>
                <div className='d-flex flex-column justify-content-center'>
                  <div className='txt'>Pradeep on Gallery</div>
                  <div className='txt'> Yes,you can do.</div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </>
    )
  }
}



