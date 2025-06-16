const mongoose = require('mongoose');
const validator = require('validator');

// User Schema for MongoDB using Mongoose

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:3,
        trim:true,

    },
    lastName:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:(value)=>{
            const isMail=validator.isEmail(value);

            if(!isMail){
                throw new Error("it is not a valid email")
            }
        }
        
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        validate:(value)=>{
            const isPhone=validator.isMobilePhone(value,"any");

            if(!isPhone){
                throw new Error("it is not a valid phone number")
            }
        }
    },
    gender:{
        type:String,

        validate:(value)=>{
            if(!["Male","Female","Other"].includes(value)){
                throw new Error("Invalid Gender")
            }
        }

    },
    age:{
        type:Number,
        validate:(value)=>{
            if(value<0){
                throw new Error("invalid age")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate:(value)=>{
            const isStrongPassword=validator.isStrongPassword(value);

            if(!isStrongPassword){
                throw new Error("it is not a Strong Password")
            }
        }
    },
    role:{
        type:String,
        default:"user",
        validate:(value)=>{
            if(!["user","admin","volunteer"].includes(value)){
                throw new Error("Invalid Role")
            }
        }
    },

    about:{
        type:String,
        trim:true,
        default:"Eager to Make New Friends"
    },
   

});

const User = mongoose.model('User', userSchema);

module.exports = User;
