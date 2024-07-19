const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:[true, 'fullname is required'],
        trim:true
    },
    email:{
        type:String,
        require:[true, 'email is required'],
        unique:true,
        trim:true,
        lowerCase:true
    },
    password:{
        type:String,
        require:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    blackList:[]
    
},{timestamps:true})
const userModel=mongoose.model('frontEndApi', userSchema)
module.exports = userModel