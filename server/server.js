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
app.use('/employees', require('./routes/EmployeeRouter.js'))
// Status API Routes
app.use('/statuses', require('./routes/StatusRouter.js'))
// Parcel API Routes
app.use('/parcels', require('./routes/ParcelRouter.js'))
// ParcelEvent API Routes
app.use('/parcels-events', require('./routes/ParcelEventRouter.js'))

// // UNCOMMENT FOR PURGING THE DATABASE
// sequelize
//   .query(
//     `SELECT table_name FROM information_schema.tables
//   WHERE table_schema = 'cf5';`
//   )
//   .then(([results]) => console.log(results))
// sequelize
//   .query(
//     `DROP TABLE IF EXISTS SequelizeMeta,SequelizeMetaBackup,Test,ParcelEvent,Parcel,Employee,Status;`
//   )
//   .then(([results, metadata]) => console.log(results, metadata))
// sequelize
//   .query(
//     `SELECT table_name FROM information_schema.tables
//   WHERE table_schema = 'cf5';`
//   )
//   .then(([results]) => console.log(results))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(
    `Server started on port ${PORT}\nClick here to open the server: http://localhost:${PORT}/`
  )
)
