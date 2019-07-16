require("dotenv").config();

const express = require("express");
const app = express();
const db = require('./src/config/database')
const PORT = process.env.PORT || 3000;
const homeRouter = require("./src/routes/home");
const userRouter = require("./src/routes/user")

if(!db){
    console.log('cannot connect');
} else{
    console.log('connected');
}

app.use("/", homeRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
