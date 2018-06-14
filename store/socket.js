
import SocketIOClient from 'socket.io-client';
// import store from './index';
// import { checkBroadcasts } from './friendsPlans';
// import { newRecommendation } from './recommendations';

const socket = SocketIOClient('http://172.16.27.23:3000');
socket.on('connected', ()=> console.log('connected'))
socket.on('newBroadcast', broadcast => store.dispatch(checkBroadcasts(broadcast)))
socket.on('newRecommendation', recommendation => store.dispatch(newRecommendation(recommendation)))


export const newBroadcast = (plan)=>{
  socket.emit('broadcasting', plan)
}

export default socket