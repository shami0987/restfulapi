const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsdb").then(()=>{
    console.log("Connection Established");
}).catch((err)=>{
    console.log("Connection Establishment Failed"+err);
});

