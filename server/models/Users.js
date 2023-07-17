const mongoose=require('mongoose');

const Schema1= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        default:"",
    },
},{timestamps:true});


const Users=mongoose.model('User',Schema1)
module.exports=Users;