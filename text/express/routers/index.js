const express = require('express')
const router = express.Router()

router.get('/register', (req, res) => {
	res.send('注册成功')
})

module.exports = router