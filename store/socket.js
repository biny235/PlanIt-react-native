import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://fwiwh.herokuapp.com');
socket.on('connected', () => console.log('connected'));

export const newBroadcast = (plan) => {
  socket.emit('broadcasting', plan);
};

export const newRecommendation = (recommendation) => {
  socket.emit('recommending', recommendation);
};

export default socket;
