const Status = require('../models/Status.js')

const StatusController = {
  // @desc Get All Status
  
  all: (req, res) => {
    Status.findAll().then((status) => res.json(status))
  },

  
  // @desc Get A Single Status
  find: (req, res) => {
    Status.findByPk(req.params.id).then((status) => res.json(status))
  },

  // @desc Create A Status
  create: (req, res) => {
    Status.create({
      status: req.body.status,
    }).then((status) => res.json(status))
  },

  // @desc Update A Status
  update: (req, res) => {
    Status.update(
      {
        status: req.body.status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => Status.findByPk(req.params.id).then((status) => res.json(status)))
  },

  // @desc Delete A Status
  delete: (req, res) => {
    Status.findByPk(req.params.id).then((status) =>
      Status.destroy({ where: { id: req.params.id } }).then(() =>
        res.json(status)
      )
    )
  },
}

module.exports = StatusController
