const mongoose=require('mongoose');

const Schema3 =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
},
    {timestamps:true}
)

const Category = mongoose.model('Categories',Schema3)

module.exports=Category;