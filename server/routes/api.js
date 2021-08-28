const express = require('express')
const router = express.Router()
const {HELLO,SEND_DATA, ADD_TROCK, ALL_TROCK,EDIT_TROCK,DELETE_TROCK}= require('../controlers/trock.controlers')
const { REGISTER, LOGIN } = require('../controlers/user.controleurs')


router.get('/hello', HELLO)
router.post('/send', SEND_DATA)
router.post('/add', ADD_TROCK)
router.get('/all', ALL_TROCK)
router.put('/edit', EDIT_TROCK)
router.post('/delete', DELETE_TROCK)

router.post('/register', REGISTER)
router.post('/login', LOGIN)


module.exports =router;