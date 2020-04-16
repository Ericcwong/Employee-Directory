const mongoose = require("mongoose");

//Validation
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


//using mongoose schema
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employee: {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        position:{
            type: String,
            required: true
        },
    }
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;