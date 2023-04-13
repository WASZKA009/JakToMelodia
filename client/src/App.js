import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Icons from 'react-bootstrap-icons';
import io from 'socket.io-client';
//import { useEffect } from 'react';
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className='column'> {/*ROUND 1*/}
          <h2>ROUND 1</h2> <Button size='sm'>ROUND 1</Button>
          <ul className='songList'>
            <li><h5 className='song'>...</h5><Button variant='light' size='sm'><Icons.PlayFill size={20} /></Button></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col>
        <Col className='column'> {/*Players*/}
          <p>Players</p>
          <Container fluid>
            <Row>
              <Col>
                <p className='centre'>P1</p>
              </Col>
              <Col>
                <p className='centre'>P2</p>
              </Col>
              <Col>
                <p className='centre'>P3</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                      <div className='circle center-block' />
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                      <div className='circle center-block' />
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                      <div className='circle center-block' />
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                    <div className='points'>
                    </div>
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                    <div className='points'>
                    </div>
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                    <div className='points'>
                    </div>
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className='column'> {/*ROUND 2*/}
          <h2>ROUND 2</h2>
        </Col>
        <Col className='column'> {/*Timer*/}
          <p>Timer</p>
        </Col>
      </Row>
      <Row>
        <Col className='column'> {/*ROUND 3*/}
          <h2>ROUND 3</h2>
        </Col>
        <Col className='column'> {/*Descrip*/}
          <p> Descrip </p>
        </Col>
      </Row>
      <Row>
        <Col className='column'> {/*ROUND 4*/}
          <h2>ROUND 4</h2>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

  // using socket.io
  // const sendMessage = () => {
  //   socket.emit("message", { message: "Hello, world!" });
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     alert(data.message)
  //   })
  // }, [socket])
  