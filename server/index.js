const express = require("express");
const cors = require("cors");

// DB Config
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

// CORS Header Middleware
app.use(cors());

// JSON Parser Middleware
app.use(express.json());

// Test API Routes
app.use("/api/tests", require("./routes/api/TestRouter.js"));
// Parcel API Routes
 app.use("/api/parcels", require("./routes/api/ParcelRouter.js"));

// Employee API Routes
app.use("/api/employees", require("./routes/api/EmployeeRouter.js"));
//ParcelHistory API Routes
app.use("/api/parcelhistory", require("./routes/api/ParcelHistoryRouter.js"));
//Status API Routes
//app.use("/api/status", require("./routes/api/StatusRouter.js"));

// User API Routes
//  app.use("/api/users", require("./routes/api/UserRouter.js"));
// Todos API Routes
//  app.use("/api/todos", require("./routes/api/TodosRouter.js"));

 const PORT = /* process.env.PORT ||  */ 5000;

 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
