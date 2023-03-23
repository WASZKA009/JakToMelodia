import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import io from 'socket.io-client';
import { useEffect } from 'react';
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className='column'>
          <p>Siema</p>
        </Col>
        <Col className='column'>
          <p>Siema</p>
        </Col>
      </Row>
      <Row>
        <Col className='column'>
          <p>Siema</p>
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
  