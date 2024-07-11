const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log('failed',e);
})

const feedbackSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
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

const Feedback = mongoose.model('feedback', feedbackSchema);

module.exports = Feedback;
