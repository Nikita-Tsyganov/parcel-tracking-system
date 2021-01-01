const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const UserController = {
  // @desc Get All Todos
  all: (req, res) => {
    User.findAll().then(users => res.json(users));
  },

  // @desc Get A Single Todo
  find: (req, res) => {
    console.log(req.params);
    User.findOne({ where: { _id: req.params.id } }).then(user => res.json(user));
  },

  // @desc Sign in a user
  signIn: (req, res) => {
    User.findOne({ where:{ username: req.body.username }  })
      .then(user => {
        const { username, password } = req.body;
        if (!username || !password) {
          return res.status(400).json("incorrect form submission");
        }

        const isValid = bcrypt.compareSync(req.body.password, user[0].hash);
        if (user.length > 0) {
          if (isValid) {
            res.json(user);
          } else {
            res.status(400).json("wrong credentials");
          }
        } else {
          res.status(400).json("unable to find user");
        }
      })
      .catch(err => res.status(400).json(err));
  },

  // @desc Create A Todo
  create: (req, res) => {
    console.log(req.body);
    const hash = bcrypt.hashSync(req.body.password, 10);
    new User({
      username: req.body.username,
      password: hash,
      //dateJoined: req.body.dateJoined,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role:req.body.role
    })
      .save()
      .then(user => res.json(user));
  },

  // @desc Update A Todo
  update: (req, res) => {
    User.findByIdAndUpdate(
      req.params.id,
      {
        email: req.body.email,
        hash: req.body.hash,
        dateJoined: req.body.date,
        name: req.body.name
      },
      {
        new: true
      }
    ).then(user => res.json(user));
  },

  // @desc Delete A Todo
  delete: (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => res.json(user));
  }
};

module.exports = UserController;
