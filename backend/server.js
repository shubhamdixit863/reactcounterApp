const express=require("express");
const app=express();
const cors =require("cors");
const mongoose=require("mongoose");
//mongodb+srv://logan:8fvRmtCQCEHaUnyF@cluster0.b5bwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// mongodb

mongoose.connect("mongodb+srv://logan:8fvRmtCQCEHaUnyF@cluster0.b5bwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(data=>{
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

app.post("/savedata",(req,res)=>{
  data.push(req.body);

    res.json({message:"Data Received"})
})

///

app.listen(9000,(req,res)=>{
    console.log("Server Running at port 9000")

})