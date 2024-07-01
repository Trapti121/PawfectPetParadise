const mongoose=require("mongoose")
// mongodb+srv://Trapti:tkg@4002@cluster0.snfcjdu.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://Trapti:tkg@4002@cluster0.snfcjdu.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://Trapti:tkg4002@cluster0.snfcjdu.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log('failed',e);
})
const ewSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    message:{
        type:String,
        required:false },
})
const collection = mongoose.model("collection",ewSchema)

module.exports=collection