const mongoose = require('mongoose')
let Schema = mongoose.Schema

let time = new Date().getTime()

let UserSchema = new Schema({
	username: {type: String}, 						// 账号
	password: {type: String},						// 密码
	registerDate: {type: String, default: time},	// 注册时间
	loginDate: {type: String, default: time}		// 最近一次登录时间
})

module.exports = UserSchema
