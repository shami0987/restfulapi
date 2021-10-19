const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3
    },
    email : {
        type: String,
        required: true,
        unique: [true,"Email is Already Used"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone : {
        type: Number,
        min: 10,
        required: true,
        unique:true
    },
    address : {
        type: String,
        required: true,
    }
})

//defining a model
const Student = new mongoose.model("Student",studentSchema);
console.log("Model Created Successful");
module.exports = Student;