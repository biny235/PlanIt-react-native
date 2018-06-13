
import SocketIOClient from 'socket.io-client';
import store from './index';
import { checkBroadcasts } from './friendsPlans'


socket = SocketIOClient('http://localhost:3000');
socket.on('connected', ()=> console.log('connected'))
socket.on('newBroadcast', broadcast => store.dispatch(checkBroadcasts(broadcast)))
socket.on('newRecommendation', recommendation => store.dispatch(newRecommendation(recommendation)))

export default socket