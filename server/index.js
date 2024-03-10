const express= require('express');
const cors= require('cors');
const {MongoClient} = require('mongodb');
const bcrypt= require('bcrypt');


const app= new express();
app.use(express.json()); 

app.use(cors());   

const client= new MongoClient('mongodb+srv://VISHNU:Vishnu%4066@cluster0.zhckl59.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();


const db= client.db("sdp");
const col= db.collection("user");
const col2= db.collection("room");


app.get('/home',(req,res)=>{
    res.send("It is a Hoem page");
})

app.post('/insert', async (req,res)=>{
    
    req.body.password = await bcrypt.hash(req.body.password,5);
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data recieved");
});


app.post('/check',async(req,res)=>{
    console.log(req.body);
    
    var result= await col.findOne({"name":req.body.un})
    if(result!=null){
        if(await bcrypt.compare(req.body.pw,result.password)){
            res.send(result);
        }
        else{
            res.send("fail");
        }
    }
    else{
        res.send("fail");
    }
})

app.get('/show', async(req,res)=>{
    var result= await col.find().toArray();
    console.log(result);
    res.send(result);
})

app.get('/room',async(req,res)=>{
    var result= await col2.find().toArray();
    console.log(result);
    res.send(result);
})

app.post('/entry',(req,res)=>{
    console.log(req.body);
    col2.insertOne(req.body);
    res.send("Successfully added");
})



app.delete('/delete',async (req,res)=>{
    await col2.deleteOne({roomId:req.query.id})
    res.send("deleted");
})

app.listen(8081);
console.log("Server running");

