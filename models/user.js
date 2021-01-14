const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type : String,
        required: true,
        unique: true
    },
    password :{
        type:String,
        required : true
    },
    name :{
        type: String,
        required : true
    }
},{
    timestamps : true
});
// User is reffering to userSchema 
const User  = mongoose.model('User', userSchema);
//export it
module.exports = User; 