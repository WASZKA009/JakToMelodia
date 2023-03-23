import './App.css';
import io from 'socket.io-client';
import { useEffect } from 'react';
const socket = io.connect("http://localhost:3001");

function App() {


  return (
    <div className="App">
      <table>
        <tr >
          <td>

          </td>
        </tr>
      </table>
    </div>
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
  