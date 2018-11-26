const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')

const server = http.createServer(app).listen(4000, () => {
	console.log('监听4000')
})

const index = require('./api/index')
const mongoose = require('./config/mongoose.js')

const db = mongoose()

app.engine( 'html', require('ejs').renderFile )
.set('view engine', 'html')
.use(index)

const io = require('socket.io').listen(server)
io.sockets.on('connection', (socket) => {
    const timer = ''
    console.log('链接成功')
    socket.on('start', (res) => {
    	console.log(res)
	    socket.emit('login', {
	        "Action": "DataRecv",
	        "Data": {
	        	"Reporting_mode": {"T":"I","V":5},
	    	}
	    })
    })
})