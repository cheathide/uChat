const express = require('express')
const router = express.Router()

const UserModel = require('../models/UserModel')

router

// 获取验证码
.get('/get_verificat', (req, res) => {
	// space
	res.send('verificat')
})

// 注册
.post('/register', (req, res) => {
	let options = {
		username: req.body.username || '',
		verificat: req.body.verificat || '',
		password: req.body.password || '',
		repassword: req.body.repassword || ''
	}
	if (!options.username) {
		res.send({
			msg: 'error',
			data: '请输入手机/邮箱'
		})
		return
	} else if (!options.verificat) {
		res.send({
			msg: 'error',
			data: '请输入验证码'
		})
		return
	} else if (!options.password) {
		res.send({
			msg: 'error',
			data: '请输入密码'
		})
		return
	} else if (!options.repassword) {
		res.send({
			msg: 'error',
			data: '请确认密码'
		})
		return
	}
	UserModel.find({username: options.username}, (error, data) => {
		if (error) console.log(error)
		if (data.length) {
			res.send({
				msg: 'error',
				data: '该手机/邮箱已被注册'
			})
			console.log('该手机/邮箱已被注册')
			return
		} else {
			UserModel.create(options, (err, data) => {
				if (err) console.log(err)
				console.log('注册成功:', data)
				res.send({
					msg: 'success',
					data: '注册成功'
				})
			})
			return
		}
	})
})

// 登录
.post('/login', (req, res) => {
	let options = {
		username: req.body.username || '',
		password: req.body.password || ''
	}
	if (!options.username) {
		res.send({
			msg: 'error',
			data: '请输入手机/邮箱'
		})
		return
	} else if (!options.password) {
		res.send({
			msg: 'error',
			data: '请输入密码'
		})
		return
	}
	UserModel.find(options, (error, data) => {
		if (error) console.log(error)
		console.log(data.length)
		if (data.length) {
			res.send({
				msg: 'success',
				data: '登录成功'
			})
		} else {
			res.send({
				msg: 'error',
				data: '账号或密码错误'
			})
		}
		console.log(data)
	})
})

module.exports = router
