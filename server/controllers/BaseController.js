class BaseController {
  // Constructor
  constructor(model) {
    this.model = model
    this.all = this.all.bind(this)
    this.find = this.find.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  // @desc Get All Records
  all(req, res, next, options = {}) {
    this.model.findAll(options).then((records) => res.json(records))
  }
  // @desc Get A Single Record
  find(req, res, next, options = {}) {
    this.model
      .findByPk(req.params.id, options)
      .then((record) => res.json(record))
  }
  // @desc Create A Record
  create(req, res, next, options = {}) {
    this.model.create(req.body, options).then((record) => res.json(record))
  }
  // @desc Update A Record
  update(req, res, next, options = {}) {
    this.model
      .findByPk(req.params.id)
      .then((record) =>
        record.update(req.body, options).then(() => res.json(record))
      )
  }
  // @desc Delete A Record
  delete(req, res, next, options = {}) {
    this.model
      .findByPk(req.params.id)
      .then((record) => record.destroy(options).then(() => res.json(record)))
  }
}

module.exports = BaseController
