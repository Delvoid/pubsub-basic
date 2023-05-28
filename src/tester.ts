import { Publisher } from './services/Publisher';
import { Subscriber } from './services/Subscriber';

let publisher = new Publisher();
let subscriber = new Subscriber();

// Subscribe to the topic
subscriber.subscribe('event', (message: any) => {
  console.log(`Message received: ${message}`);
});

// Publish a message to the topic

publisher.publish('event', 'Hello World!');
