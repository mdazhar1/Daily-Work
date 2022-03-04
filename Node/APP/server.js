const express = require("express");
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Hello My name is Maaz")
})

app.get("/getpatiant",(req,res)=>{
    res.send("Ms. Mushi kumari");
})
app.get("/getdoctor",(req,res)=>{
    res.send("Dr. Maaz Quadri");
})

app.post("/specialist",(req,res)=>{
    let drName="None"
    if(req.body.type === "ENT"){
        drName="Dr. Tahir"
    }else if (req.body.type === "EYE"){
        drName= "Dr. Najeeb"
    }else if (req.body.type === "PHY"){
        drName = "Dr. Mujtaba Quadri"
    }else if (req.body.type === "PSY"){
        drName= "Dr. Rahman"
    }
    res.send(drName);
})

app.listen(5050,()=>{
    console.log("server is working on port 5050");
});
