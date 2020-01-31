const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
const notFound = require('./middleware/notFound')
const error = require('./middleware/error')

const server = express()

server.use(cors())
server.use(logger())
server.use(express.json())



server.use(notFound())
server.use(error())

module.exports = server