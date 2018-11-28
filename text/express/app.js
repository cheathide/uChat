const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const session = require('express-session')
const cookieParser = require('cookie-parser')

// 监听端口
const server = http.createServer(app).listen(4000, () => {
	console.log('监听4000')
})

const api_index = require('./api/index')			// api接口
const mongoose = require('./config/mongoose.js')	// mongoose -- mongodb连接

const db = mongoose()

// 应用cookie
app.use(cookieParser())
// 应用session
app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: 'love'
}))
app.engine( 'html', require('ejs').renderFile )
.set('view engine', 'html')
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))		// 接收post参数  -- req.body
// .use((req, res, next) => {
// 	console.log(req.url)
//     if (!req.session.user) {
//         if(req.url=="/login"){
// 			console.log(222)
//             next()
//         }
//         else
//         {
// 			console.log(333)
//             res.redirect('/login');
//         }
//     } else if (req.session.user) {
// 		console.log(444)
//         next()
//     }
// })
.use(express.static(path.join(__dirname, 'views/front')))
.use('/api', api_index)


// socket连接
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
