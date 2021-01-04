const express = require('express')
const cors = require('cors')
const { sequelize } = require('./db.js')

// Test the DB connection
sequelize
  .authenticate()
  .then(() => console.log('MySQL database connected successfully'))
  .catch((err) => console.log('Error: ' + err))

const app = express()

// CORS Header Middleware
app.use(cors())

// JSON Parser Middleware
app.use(express.json())

// Employee API Routes
app.use('/api/employees', require('./routes/api/EmployeeRouter.js'))
// Status API Routes
app.use('/api/statuses', require('./routes/api/StatusRouter.js'))
// Parcel API Routes
app.use('/api/parcels', require('./routes/api/ParcelRouter.js'))
// ParcelHistory API Routes
app.use(
  '/api/parcels-histories',
  require('./routes/api/ParcelHistoryRouter.js')
)

// // UNCOMMENT FOR PURGING THE DATABASE
// sequelize.query(
//   `SELECT table_name FROM information_schema.tables
//   WHERE table_schema = 'cf5';`
// ).then(([results]) => console.log(results))
// sequelize.query(
//   `DROP TABLE IF EXISTS SequelizeMeta,SequelizeMetaBackup,Test,ParcelHistory,Parcel,Employee,Status;`
// ).then(([results, metadata]) => console.log(results, metadata))
// sequelize.query(
//   `SELECT table_name FROM information_schema.tables
//   WHERE table_schema = 'cf5';`
// ).then(([results]) => console.log(results))

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
