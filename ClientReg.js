const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jerinjoseph077:kollanur@cluster0.czxanhf.mongodb.net/clientReg?retryWrites=true&w=majority")
.then(()=>{console.log("DB connuct")})
.catch(err=>console.log(err));
const clientschema=new mongoose.Schema(
    {
    jobtitle:String,
    jobdes:String,
    location:String,
    name:String,
    phonenumber:Number,
    
});
var clientmodel=mongoose.model("Students",clientschema)
module.exports=clientmodel;
