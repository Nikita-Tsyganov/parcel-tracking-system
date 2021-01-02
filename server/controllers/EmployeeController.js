const Employee = require('../models/Employee.js')

const EmployeeController = {
  // @desc Get All Employees
  
  all: (req, res) => {
    Employee.findAll().then((employees) => res.json(employees))
  },

  
  // @desc Get A Single Employee
  find: (req, res) => {
    Employee.findByPk(req.params.id).then((employee) => res.json(employee))
  },

  // @desc Create A Employee
  create: (req, res) => {
    Employee.create({
      last_name: req.body.last_name,
      first_name: req.body.first_name,
    }).then((employee) => res.json(employee))
  },

  // @desc Update A Employee
  update: (req, res) => {
    Employee.update(
      {
        last_name: req.body.last_name,
      first_name: req.body.first_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => Employee.findByPk(req.params.id).then((employee) => res.json(employee)))
  },

  // @desc Delete A Employee
  delete: (req, res) => {
    Employee.findByPk(req.params.id).then((employee) =>
      Employee.destroy({ where: { id: req.params.id } }).then(() =>
        res.json(employee)
      )
    )
  },
}

module.exports = EmployeeController
