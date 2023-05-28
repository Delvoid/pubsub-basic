import 'dotenv/config';
import express from 'express';
import type MessageResponse from './interfaces/MessageResponse';
import errorHandler from './middleware/errorHandler';
import notFound from './middleware/notFound';
import api from './routes/api.routes';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

app.use(express.json());

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('subscribe', (event) => {
    console.log(`subscribin to ${event}`);
    socket.join(event);
  });

  socket.on('publish', ({ event, message }) => {
    console.log(`Publishing to event: ${event}`);
    io.to(event).emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

app.get<Record<string, unknown>, MessageResponse>('/', (_, res) => {
  res.json({
    message: '👋🌎🚀',
  });
});

app.use('/api', api);

app.use(notFound);
app.use(errorHandler);

export default httpServer;
