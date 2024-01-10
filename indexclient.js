const express=require("express")
const app=new express();
const cors=require("cors")
const clientmodel=require('./ClientReg')
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.listen(3005,(request,response)=>{
    console.log("port is running 3005")
})
app.get('/',(request,response)=>{
    response.send("hai")
})
app.post('/new',(request,response)=>{
    console.log(request.body)
    new clientmodel(request.body).save();
    response.send("record saved")

})
app.get('/view',async(request,response)=>{
    var data=await tmodel.find();
    response.send(data)
})
app.put('/edit/:id',async(request,response)=>
{
    let id =request.params.id;
    await clienttmodel.findByIdAndUpdate(id,request.body)
    response.send("Data Updated");
})