const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/auth-router')
const UserRouter = require('./users/users-router')
const classRouter = require('./classes/class-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', UserRouter)
server.use('/api/classes', classRouter)

server.get('/', (req, res) => {
    res.json('we are live')
})

//Global Error Handling 
server.use((err, req, res, next)=>{
    res.json({
        message: err.message,
        stack: err.stack
    })
})
module.exports = server;


