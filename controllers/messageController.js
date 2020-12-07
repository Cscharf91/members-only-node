const Message = require('../models/message');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');

exports.message_create = [
  body('title', 'Title name required').trim().isLength({ min: 1 }).escape(),
  // body('message', 'Message required').trim().isLength({ min: 1 }).escape(),

  (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    const message = new Message(
      { 
        username: req.user.username,
        title: req.body.title,
        message: req.body.message,
        date: new Date
      }
    )
    if (!errors.isEmpty()) {
      Message.find()
        .exec((err, msg_list) => {
          if (err) {
            return next(err);
          }
          res.render('index', { messages: msg_list, user: req.user, message: message, errors: errors.array() });
        })
      return;
    } else {
      message.save((err) => {
        if (err) { 
          return next(err); 
        }
        Message.find()
        .exec((err, msg_list) => {
          if (err) {
            console.log(err);
            return next(err);
          }
          res.render('index', { messages: msg_list, user: req.user, errors: null });
        })
      });
    }
  }
];