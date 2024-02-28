console.log("Hello Shubh");

const express = require("express");
const mongoose =require('mongoose');

const authRouter = require("./routes/auth");
const PORT = 3000;  
const app = express();
const DB ="mongodb+srv://kshubh00200:Shubham8308@cluster0.3rc3xbt.mongodb.net/?retryWrites=true&w=majority";
app.use(authRouter);

mongoose.connect(DB).then(()=>{
    console.log("Coonection Successful");
}).catch((e)  =>{
    console.log(e);
});
app.listen(PORT,  () => {
  console.log(`Connected to Port ${PORT} hello`);
});

 