
import SocketIOClient from 'socket.io-client';



const socket = SocketIOClient('http://172.16.27.23:3000');
socket.on('connected', ()=> console.log('connected'))



export const newBroadcast = (plan)=>{
  socket.emit('broadcasting', plan)
}

export const newRecommendation = ( recommendation ) => {
  socket.emit('recommending', recommendation)
}


export default socket