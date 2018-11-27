const mongoose = require('mongoose')
const UserSchema = require('../schemas/UserSchema')

const User = mongoose.model('user', UserSchema)

module.exports = User
