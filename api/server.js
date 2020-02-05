const express = require('express')
const cors = require('cors')
const logger = require('../middleware/logger')
const notFound = require('../middleware/notFound')
const error = require('../middleware/error')
const authRouter = require('../routes/auth/auth-router')
const contactsRouter = require('../routes/contacts/contact-router')

const server = express()

server.use(cors())
server.use(logger())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/contacts', contactsRouter)

server.use(notFound())
server.use(error())

module.exports = server