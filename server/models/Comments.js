const mongoose=require("mongoose")

const Schema4 =new mongoose.Schema({
    postId:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    description:{
        required:true,
        type:String,
    }
},{timestamps:true}
);

const Comments=mongoose.model("Comments",Schema4)
module.exports=Comments