const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "must provide task"],
        trim : true,
        maxlength : [20, " cannot be more than 20 character"]
    },
    completed : {
        type : Boolean,
        default : false
    }
})


module.exports = mongoose.model('taskModel', taskSchema)