const express=require("express");
const app=express();
const cors =require("cors");
const mongoose=require("mongoose");
const User=require("./models/User");
//mongodb+srv://logan:8fvRmtCQCEHaUnyF@cluster0.b5bwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// mongodb

mongoose.connect("mongodb+srv://logan:8fvRmtCQCEHaUnyF@cluster0.b5bwf.mongodb.net/myFirstDatabaseTest?retryWrites=true&w=majority").then(data=>{
    console.log("Mongodb Connected")
})

function foo(){
    /// logic
}

()=>{

}

const data=[]

// root of application

/// Application-json // application-wwe-fomr-urlencoded
app.use(express.json());



app.use(cors({
    origin:["http://localhost:3000","http://localhost:3001"]
}));

app.get("/",function(req,res){
    res.send("hello world")
})
app.get("/user",function(req,res){

    res.json(data);

})

app.post("/savedata",async(req,res)=>{
 const user=await  User.create(req.body)


    res.json({message:"User Created",user:user})
})

app.get("/getUsers",async(req,res)=>{
    const user=await  User.find(); // Array of users
   
   
       res.json({message:"All Users",user:user})
   })

   app.delete("/delete/:id",async(req,res)=>{
       const id=req.params.id;
       await User.deleteOne({_id:id});

       res.json({message:"Deleted SuccessFully"});



   })

   app.get("/user/:id",async(req,res)=>{
    const id=req.params.id;
    const user=await User.findOne({_id:id});

    res.json({message:"Deleted SuccessFully",user:user});



})

///

app.listen(9000,(req,res)=>{
    console.log("Server Running at port 9000")

})