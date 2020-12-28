import './App.css';
import React, { Component } from 'react';
import Clock from './Clock'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalCard from './Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import colosseo from './img/colosseo.jpeg'
import london from './img/London.jpg'
import bucharest from './img/Bucharest.jpg'
import moscow from './img/Moscow.jpg'
import dubai from './img/Dubai.jpg'
import male from './img/Male.jpg'
import Dahka from './img/Dahka.jpg'





class App extends Component {


  render() {
    const timeItaly = <Clock timeZone='0' />;
    const timeLondon = <Clock timeZone='-1' />;
    const timeBucharest = <Clock timeZone='1' />;
    const timeMoscow = <Clock timeZone='2' />;
    const timeDubai = <Clock timeZone='3' />;
    const timeMale = <Clock timeZone='4' />; 
    const timeDahka = <Clock timeZone='5' />; 

    const titleAllert = [
      'primary'
    ].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        <h1>Fusi orari internazionali</h1>
      </Alert>
    ));

    return (
      <React.Fragment>
        <div>
        {titleAllert}
        <hr></hr>

        <Container>
          <Row>

            <Col>
              <PersonalCard titolo="LONDON" testo={timeLondon} national={london} />
            </Col>

            <Col>
              <div className="d-flex justify-content-center">
                <PersonalCard titolo="ROME" testo={timeItaly} national={colosseo} />
              </div>
            </Col>
            
            <Col>
              <div className="d-flex justify-content-end">
                <PersonalCard titolo="BUCHAREST" testo={timeBucharest} national={bucharest} />
              </div>
            </Col>

          </Row>

          <br></br>

          <hr style={{
            borderColor: 'cadetblue',
          }} />

          <br></br>

          <Row>

            <Col>
              <PersonalCard titolo="MOSCOW" testo={timeMoscow} national={moscow} />
            </Col>

            
            <Col>
              <div className="d-flex justify-content-center">
                <PersonalCard titolo="DUBAI" testo={timeDubai} national={dubai} />
              </div>
            </Col>

            
            <Col>
              <div className="d-flex justify-content-end">
                <PersonalCard titolo="MALE" testo={timeMale} national={male} />
              </div>
            </Col>
            
          </Row>

          <hr style={{
            borderColor: 'cadetblue',
          }} />

        </Container>
        </div>
      </React.Fragment>
    );

  }



}
//<Clock country="New York" timeZone="-6" />
export default App;