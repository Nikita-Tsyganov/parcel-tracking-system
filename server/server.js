const express = require("express");
// const cors = require("cors");

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

 const app = express();

 app.use(express.json());
// // DB Config
// const db = require("./config/database.js").mongoURI;

// // Connect to Mongo
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err));

// // CORS Header Middleware
// app.use(cors());

// // Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Todos API Routes
 app.use("/api/todos", require("./routes/api/TodosRouter.js"));
 app.use("/api/users", require("./routes/api/UserRouter.js"));

 const PORT = /* process.env.PORT ||  */ 5000;

 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
