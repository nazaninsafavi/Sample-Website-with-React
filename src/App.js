import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Header from "./Components/Header/Header";
import Menu from './Components/Menu/Menu.js';
import Slide from "./Components/Slide/Slide";
import Middle from "./Components/Middle/Middle";
import Theme from "./Components/Theme/Theme";
import Search from "./Components/Search/Search";
import TabMenu from "./Components/TabMenu/TabMenu";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Container fluid>
        <Row className="First-Nav">
          <Header></Header>
        </Row>
        <Row className="First-Nav">
          <Menu></Menu>
        </Row>
        <Row className="content">
            <Slide></Slide>
        </Row>
        <Row>
          <Middle></Middle>
        </Row>
        <hr id="line"></hr>
      </Container>
      <Container>
        <Row className="footcontent">
            <Col xs={12} sm={12} md={4}>
                <div className="EndContent">
                    <TabMenu></TabMenu>
                </div>  
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="EndContent">  
                  <Theme></Theme>
                </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
                <div className="EndContent">
                  <Search></Search>
                </div>  
            </Col>
        </Row> 
      </Container>
      <Container fluid>
        <Row>
            <Footer></Footer>
        </Row>
      </Container>
    </>
   

    
  );
}

export default App;
