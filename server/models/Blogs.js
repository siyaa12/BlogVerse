const mongoose=require('mongoose');

const Schema2= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true, 
    },
    description:
    {
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    photo:
    {
     type:String,
     required:false,
    },
    categories:
    {
        type:Array,
        required:false,
    },

},{timestamps:true}
);

const Blogs=mongoose.model("Blogs",Schema2);
module.exports=Blogs;