const express=require("express");
const router=express.Router();
const Comments=require('../models/Comments.js')

router.get('/:id',async(req,res)=>{
   try{
    const id=req.params.id;
    const id2=id.substring(1);
     const comments=await Comments.find();
     //console.log(req.params.id);
     console.log(comments);
     res.status(200).json(comments);
   }
   catch(err)
   {
    res.status(400).json(err);
   }
})

router.post('/',async(req,res)=>{
    try{
      const newComment= new Comments(req.body);
      const saved=newComment.save()
      res.status(200).json(saved);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
})
module.exports=router
