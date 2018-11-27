const express = require('express')
const router = express.Router()

const UserModel = require('../models/UserModel')

router
.get('/api/get_verificat', (req, res) => {
	// space
})
.post('/api/register', (req, res) => {
	console.log(req.body)
	let options = {
		username: req.body.username || '',
		verificat: req.body.verificat || '',
		password: req.body.password || '',
		repassword: req.body.repassword || ''
	}
	if (!options.username) {
		res.send('请输入手机/邮箱')
		return
	} else if (!options.verificat) {
		res.send('请输入验证码')
		return
	} else if (!options.password) {
		res.send('请输入密码')
		return
	} else if (!options.repassword) {
		res.send('请确认密码')
		return
	}

	UserModel.create(options, (err, data) => {
		if (err) console.log(err)
		console.log('注册成功:', data)
		res.send('注册成功')
	})
})

module.exports = router
