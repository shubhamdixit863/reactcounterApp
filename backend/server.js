const express=require("express");
const app=express();
const cors =require("cors");

function foo(){
    /// logic
}

()=>{

}

const data=[
    {
      "_id": "619666fff60b2358dcde5a34",
      "balance": "$2,389.96",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "green",
      "name": "Frederick Flowers",
      "gender": "male",
      "company": "AQUASURE",
      "email": "frederickflowers@aquasure.com",
      "phone": "+1 (857) 408-2940"
    },
    {
      "_id": "619666ffd7e20c133bdd490f",
      "balance": "$2,076.70",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "brown",
      "name": "Coleman Gilliam",
      "gender": "male",
      "company": "STELAECOR",
      "email": "colemangilliam@stelaecor.com",
      "phone": "+1 (856) 575-2874"
    },
    {
      "_id": "619666ff37c0dd6475f554d6",
      "balance": "$3,305.29",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "blue",
      "name": "Brewer Waller",
      "gender": "male",
      "company": "KONNECT",
      "email": "brewerwaller@konnect.com",
      "phone": "+1 (983) 594-2302"
    },
    {
      "_id": "619666ff7703b862b106e1aa",
      "balance": "$1,005.20",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "brown",
      "name": "Diana Walker",
      "gender": "female",
      "company": "MARTGO",
      "email": "dianawalker@martgo.com",
      "phone": "+1 (995) 525-2779"
    },
    {
      "_id": "619666ffdb3aadc8ec8677e0",
      "balance": "$2,037.92",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "green",
      "name": "Opal Rocha",
      "gender": "female",
      "company": "RUGSTARS",
      "email": "opalrocha@rugstars.com",
      "phone": "+1 (870) 469-2212"
    },
    {
      "_id": "619666ffa56e007d6df3b1cf",
      "balance": "$2,900.38",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "blue",
      "name": "Strong Gaines",
      "gender": "male",
      "company": "EVENTIX",
      "email": "stronggaines@eventix.com",
      "phone": "+1 (885) 484-3619"
    },
    {
      "_id": "619666ffc09b84e14f6bb817",
      "balance": "$1,842.38",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "green",
      "name": "Ebony Obrien",
      "gender": "female",
      "company": "COMVEYOR",
      "email": "ebonyobrien@comveyor.com",
      "phone": "+1 (943) 530-2253"
    },
    {
      "_id": "619666ffec691631812b9988",
      "balance": "$1,328.86",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "blue",
      "name": "Harper Everett",
      "gender": "male",
      "company": "ACCUSAGE",
      "email": "harpereverett@accusage.com",
      "phone": "+1 (885) 428-2449"
    },
    {
      "_id": "619666ff8ebcc30bb59c8554",
      "balance": "$3,820.52",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "blue",
      "name": "Hilda Simmons",
      "gender": "female",
      "company": "MONDICIL",
      "email": "hildasimmons@mondicil.com",
      "phone": "+1 (871) 415-2842"
    }
  ]

// root of application

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
    console.log(req.body);

    res.json({message:"Data Received"})
})


///

app.listen(9000,(req,res)=>{
    console.log("Server Running at port 9000")

})