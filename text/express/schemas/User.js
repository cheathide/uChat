const mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
	username: {type: String}, 	// 账号
	password: {type: String},	// 密码
	loginDate: {type: String, default: 123}	// 最近一次登录时间
})

module.exports = UserSchema