const express = require('express');
const router = express.Router();
const message_controller = require('../controllers/messageController');

/* GET home page. */
router.post('/create', message_controller.message_create);

module.exports = router;