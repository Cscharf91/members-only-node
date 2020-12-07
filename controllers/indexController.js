const Message = require('../models/message');

exports.index = (req, res) => {
  Message.find()
    .exec((err, msg_list) => {
      if (err) {
        return next(err);
      }
      res.render('index', { messages: msg_list, user: req.user, errors: false });
    })
}