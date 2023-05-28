// client.ts
import { io } from 'socket.io-client';
import * as readline from 'readline';

const socket = io('http://localhost:5000');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

socket.on('connect', () => {
  console.log('Connected to server.');

  rl.on('line', (input) => {
    const [command, event, ...messageParts] = input.split(' ');
    const message = messageParts.join(' ');

    if (command === 'subscribe') {
      console.log(`Subscribing to ${event}`);
      socket.emit('subscribe', event);
    } else if (command === 'publish') {
      console.log(`Publishing message to ${event}`);
      socket.emit('publish', { event, message });
    } else {
      console.log('Unknown command.');
    }
  });
});

socket.on('message', (message) => {
  console.log('Received message:', message);
});
