const express = require('express');
const cors = require('cors');

const authenticate = require('../auth/authenticate-middleware.js');


const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);


module.exports = server;
