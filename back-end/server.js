const express = require("express");
const dotenv = require('dotenv')
const connectDB = require("./connectDB")
const routes = require("./route/routes");
const cors = require("cors")

const app = express();
dotenv.config()
connectDB()

app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running..");
  });

// app.get("/api/notes", (req, res) => {
//     res.send(notes)
// });

app.use("/api/users",routes)

  
const PORT = process.env.PORT || 5000
  app.listen(
    PORT,
    console.log(
      "Server running"
    )
  );

  
// module.exports = { notFound,errorHandler }

