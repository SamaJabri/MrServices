const express = require('express');

const { upload, uploadImage } = require('../controllers/userController')
const router = express.Router();

// localhost:3001/user/upload

router.post('/upload', uploadImage, upload);

module.exports = router;