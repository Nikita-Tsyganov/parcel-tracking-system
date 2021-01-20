class BaseController {
  // Constructor
  constructor(model, options = {}) {
    this.model = model
    this.options = options
    this.options.all = options.all || options.find || {}
    this.options.find = options.find || {}
    this.options.create = options.create || {}
    this.options.update = options.update || {}
    this.options.delete = options.delete || {}
    this.all = this.all.bind(this)
    this.find = this.find.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  // @desc Get All Records
  all(req, res, next, options = {}) {
    options.all = options.all || this.options.all
    this.model.findAll(options.all).then((records) => res.json(records))
  }
  // @desc Get A Single Record
  find(req, res, next, options = {}) {
    options.find = options.find || this.options.find
    this.model
      .findByPk(req.params.id, options.find)
      .then((record) => res.json(record))
  }
  // @desc Create A Record
  create(req, res, next, options = {}) {
    options.create = options.create || this.options.create
    this.model
      .create(req.body, options.create)
      .then((record) => res.json(record))
  }
  // @desc Update A Record
  update(req, res, next, options = {}) {
    options.find = options.find || this.options.find
    options.update = options.update || this.options.update
    this.model
      .findByPk(req.params.id, options.find)
      .then((record) =>
        record.update(req.body, options.update).then(() => res.json(record))
      )
  }
  // @desc Delete A Record
  delete(req, res, next, options = {}) {
    options.find = options.find || this.options.find
    options.delete = options.delete || this.options.delete
    this.model
      .findByPk(req.params.id, options.find)
      .then((record) =>
        record.destroy(options, options.delete).then(() => res.json(record))
      )
  }
}

module.exports = BaseController
