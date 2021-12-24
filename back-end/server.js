const express = require("express");
const dotenv = require('dotenv')
const connectDB = require("./connectDB")
const bodyParser = require('body-parser')
const userRoutes = require("./router/userRouter");
const cors = require("cors")
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

dotenv.config()
connectDB()

app.use(cors());

app.use("/",userRoutes)

app.get("/", (req, res) => {
    res.send("API is running..");
  });

app.get("/user", (req, res) => {
    res.send("send")
});


  
const PORT = process.env.PORT || 5000
  app.listen(
    PORT,
    console.log(
      "Server running"
    )
  );

  
// module.exports = { notFound,errorHandler }

