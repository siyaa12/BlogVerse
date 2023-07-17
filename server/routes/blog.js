const express=require('express');

const Blogs =require('../models/Blogs.js');

const router=express.Router()
 router.post('/',async(req,res)=>{
    try{
     const newBlog=new Blogs(req.body)
     const saved=await newBlog.save();
     res.status(200).json(saved);
    }
    catch(err){
    res.status(400).json(err)
    }
 })

 router.put('/:id',async(req,res)=>{
  console.log(req.params.id);
  const post=await Blogs.findById(req.params.id);
  //console.log(post)
    try{
      const post=await Blogs.findById(req.params.id);
      if(post.username===req.body.username)
      {
        try{
          const updatedPost=await Blogs.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
          res.status(200).json(updatedPost);
          console.log(updatedPost)
        }
        catch(err){
        res.status(400).json("Not Allowed");
        }
      }
      else
      {
        res.status(401).json("You can only update your blog");
      }
    }
    catch(err)
    {
        res.status(404).json("Maa Chuda")
    }
 })
 router.delete('/:id',async(req,res)=>{
    try{
      const post=await Blogs.findById(req.params.id);
      if(post.username===req.body.username)
      {
        try{
          const updatedPost=Blogs.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
          res.status(200).json(updatedPost);
        }
        catch(err){
        res.status(404).json("Not Allowed");
        }
      }
    }
    catch(err)
    {
        res.status(404).json("Not allowed")
    }
 })

 router.get('/',async(req,res)=>{
    try{
    const user=req.query.user
    console.log(user);
    const category=req.query.category
    let blogs;
    if(user)
    {
      blogs=await Blogs.find({username:user})
    }
    else if(category)
    {
       blogs=await Blogs.find({categories:{
        $in:[category]
      }})
    }
    else
    {
     blogs=await Blogs.find()
    }
    console.log(blogs);
    res.status(200).json(blogs)
}
catch(err)
{
    res.status(401).json(err)
}
 })

 router.get("/:id",async(req,res)=>{
   try{
     const blog=await Blogs.findById(req.params.id)
     res.status(200).json(blog);
   }
   catch(err)
   {
    res.status(400).json(err)
   }
 })
 module.exports=router;
