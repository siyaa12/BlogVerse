const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const Users =require('../models/Users.js');
router.post("/login",async(req,res)=>{
    try{
        const user= await Users.findOne({username:req.body.username})
        !user && res.status(404).json("Wrong Credentials")
        const comp=await bcrypt.compare(req.body.password,user.password)
        !comp && res.status(404).json("Wrong Credentials")

        res.status(200).json(user)

    }
    catch(err)
    {
        res.status(400).json(err)
    }
})
router.post("/register",async(req,res)=>{
    console.log(req.body)
    try{
        const salt=await bcrypt.genSalt(10)
        const hash=await bcrypt.hash(req.body.password,salt)
    const newUser= new Users({
        username:req.body.username,
        email:req.body.email,
        password:hash,
        profile:req.body.profile
    });
    const user=newUser.save();
    res.status(200).json(user);
    }
    catch(err){
        res.status(404).json(err)
    }

});

router.get("/",async(req,res)=>{
   const usern=req.query.name;
   try{
   const details=await Users.find({username:usern});
   //console.log(details)
   res.status(200).json(details)
   }
   catch(err)
   {
    res.status(400).json(err);
   }
})
module.exports=router;
