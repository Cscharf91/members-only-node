const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

exports.user_list = (req, res) => {
  User.find()
    .exec((err, users) => {
      if (err) next(err);
      res.render('users_list', { users: users });
    })
}

exports.index = (req, res) => res.render("index", { user: req.user });

exports.sign_up_get = (req, res) => {
  res.render("sign_up_form");
}

exports.sign_up_post = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    const user = new User({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: hash
  
    }).save(err => {
      if (err) {
        return next(err);
      };
      res.redirect("/");
    });
  });
}