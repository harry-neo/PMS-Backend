const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'Please add a first name']
    },
    lastName:{
        type: String,
        required: [true, 'Please add a last name']
    },
    employeeID:{
        type: String,
        required: [true, 'Please add a empolyee ID']
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please add a password']
    },
    designation:{
        type: String,
        required: [true, 'Please add a password']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('user', userSchema)