const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
//connecting database


app.get("/",(req,res)=>{
    res.send("this is testing Restful API  GET Method");
})

// app.post("/student",(req,res)=>{
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         console.log("Data Inserted Sucessfull");
//         res.status(201).send(user);
//     }).catch((err)=>{
//         console.log("Error at Insertion "+err);
//         res.status(400).send(err);
//     });
// })

app.post("/student",async(req,res)=>{
    const user = new Student(req.body);
    try
    {
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})


app.get("/student",async(req,res)=>{
    try
    {
        const studentData = await Student.find();
        res.status(200).send(studentData);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})

//single data by ID
app.get("/student/:id",async(req,res)=>{
    try
    {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData)
        {
            return res.status(404).send("Student Not Found");
        }
        else
        {
            return res.status(200).send(studentData);
        }
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})

app.listen(port,() => {
    console.log('connection is established at port no '+port);
})
