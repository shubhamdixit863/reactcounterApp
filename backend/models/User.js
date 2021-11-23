const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    name:{
        type:String
        
    },

    password:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number

    }




})

const user=mongoose.model("user",userSchema);

module.exports=user;