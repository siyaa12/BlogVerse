const express =require('express');
const Category =require('../models/Category.js');

const router=express.Router()

router.post("/",async(req,res)=>{
    const newCat=new Category(req.body)
    try{
        const savedCat=await newCat.save();
        res.status(200).json(savedCat);
    }
    catch(err)
    {
        res.status(401).json(err);
    }
})

router.get("/",async(req,res)=>{
    try{
        const cat=await Category.find();
        res.status(200).json(cat)
    }
    catch(err)
    {
        res.status(400).json(err);
    }
})
module.exports=router;