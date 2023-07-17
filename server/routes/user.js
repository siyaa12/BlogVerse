const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const Users = require('../models/Users.js');
router.put("/:id",async(req,res)=>{
        if(req.body.userId===req.params.id)
        {
          if(req.body.password)
          {
            const salt= await bcrypt.genSalt(10)
            req.body.password=await bcrypt.hash(req.body.password,salt);
          }
          try{
          const userupdate=await Users.findByIdAndUpdate(req.params.id ,{$set: req.body,})
        res.status(200).json(userupdate);
          }
          catch(err)
          {
            console.log(req.params.id);
            console.log(req.body.userId);
            res.status(401).json(err)
          }
        }
        else
        {
            res.status(401).json("Not Allowed")
        }
})
router.get("/:id",async(req,res)=>{
  
})

module.exports=router;