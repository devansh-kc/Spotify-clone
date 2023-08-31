import express from "express";
const app =  express();

app.get("/",(req,res)=>{
    res.send("server is up and running on port 5000")
})
app.listen(5000,()=>{
    console.log("server is up and running on port 5000")
})