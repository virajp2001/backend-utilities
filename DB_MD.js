Mongodb Connection Code


const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = ()=>{
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
console.log("Database Connected Successfully")
})
.catch((error)=>{
console.log("Database Not Connected", error.message)
})
}


