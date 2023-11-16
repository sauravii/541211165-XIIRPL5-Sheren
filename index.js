const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./router/users");
const connectDB = require("./config/db");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// to use routes
app.use(userRouter);
// to connect DB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
