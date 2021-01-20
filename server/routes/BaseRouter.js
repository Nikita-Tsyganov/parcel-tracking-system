const Router = require('express').Router

class BaseRouter extends Router {
  // Constructor
  constructor(controller) {
    super()

    // @route  GET api/model
    // @desc   Get All Records
    // @access  Public
    this.get('/', controller.all)

    // @route  GET api/model/:id
    // @desc   Get A Single Record
    // @access  Public
    this.get('/:id', controller.find)

    // @route  POST api/model
    // @desc   Create A Records
    // @access  Public
    this.post('/', controller.create)

    // @route  PATCH api/model/:id
    // @desc   Update A Records
    // @access  Public
    this.patch('/:id', controller.update)

    // @route  DELETE api/model/:id
    // @desc   Delete A Records
    // @access  Public
    this.delete('/:id', controller.delete)
  }
}

module.exports = BaseRouter
