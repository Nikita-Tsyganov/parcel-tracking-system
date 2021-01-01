const Test = require('../models/Test.js')

const TestController = {
  // @desc Get All Tests
  all: (req, res) => {
    Test.findAll().then((tests) => res.json(tests))
  },

  // @desc Get A Single Test
  find: (req, res) => {
    Test.findByPk(req.params.id).then((test) => res.json(test))
  },

  // @desc Create A Test
  create: (req, res) => {
    Test.create({
      test: req.body.test,
    }).then((test) => res.json(test))
  },

  // @desc Update A Test
  update: (req, res) => {
    Test.update(
      {
        test: req.body.test,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => Test.findByPk(req.params.id).then((test) => res.json(test)))
  },

  // @desc Delete A Test
  delete: (req, res) => {
    Test.findByPk(req.params.id).then((test) =>
      Test.destroy({ where: { id: req.params.id } }).then(() =>
        res.json(test)
      )
    )
  },
}

module.exports = TestController
