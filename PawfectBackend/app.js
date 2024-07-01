const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({}));
app.use(express.json());


const collection = require("./mongo")


app.get("/",(req,res)=>{
    res.send("Hello");
})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email, password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
            await collection.insertMany([data]);
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/EnquiryForm",async(req,res)=>{
    const {email, name, phone, message}=req.body;

    const data={
        email:email,
        name:name,
        phone:phone,
        message:message
    }

    try{
        const check=await collection.findOne({email:email, message:message})

        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
            await collection.insertMany([data]);
          
        }
    }
    catch(e){
        res.json("fail")
    }

  

})

app.listen(8000, (err) => {
    if (err) throw "Error";
    console.log("Listening to port ", 8000);
})
