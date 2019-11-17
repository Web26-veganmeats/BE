const express = require('express');
const cors = require('cors');
const helmet = require('helmet')

const authRouter = require('../auth/authRouter')
const usersRouter = require('../users/usersRouter')
const restaurantRouter = require('../restaurants/restaurantsRouter')

const authMiddleware = require('../auth/authMiddleware')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter)
server.use('/api/users', authMiddleware, usersRouter)
server.use('/api/restaurants', authMiddleware, restaurantRouter)

server.get('/', (req, res) => {
  res.status(200).json({api: 'Ready to start working'})
})

module.exports = server;