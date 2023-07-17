const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dotenv=require('dotenv')

const commentRoute=require('./routes/comments.js');
const authRoute=require('./routes/authenciate.js');
const blogRoute=require('./routes/blog.js');
const userRoute =require('./routes/user.js');
const catRoute =require('./routes/category.js');
const multer=require('multer');
const path =require('path');
const app=express()
dotenv.config()
app.use(bodyParser.json())
app.use("/pictures", express.static(path.join(__dirname, "/pictures")));
console.log(__dirname);


mongoose.connect(process.env.MONGO_URl,{
}).then(()=>{console.log("Success")})
.catch((err)=>{console.log(err)})

const store=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"pictures");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    },
});
const upload = multer({ storage: store });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/users",userRoute)
app.use("/authenciate",authRoute)
app.use('/blogs',blogRoute)
app.use('/category',catRoute)
app.use('/comments',commentRoute);
app.listen(5000,()=>{
    console.log("We are listening")
})