const express = require('express');
const cors = require('cors');
const helmet = require('helmet')

const authRouter = require('../auth/authRouter')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
  res.status(200).json({api: 'Ready to start working'})
})

module.exports = server;