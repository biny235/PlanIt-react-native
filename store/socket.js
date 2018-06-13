
import SocketIOClient from 'socket.io-client';


socket = SocketIOClient('http://localhost:3000');
socket.on('connected', ()=> console.log('connected'))

export default socket