const express = require('express')
const router = express.Router()
const { getAllBlog, createBlog } = require('../controller/softivController.js')

router.post('/createblog', createBlog)
router.get('/getblog', getAllBlog)

module.exports = router;