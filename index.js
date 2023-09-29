import express from "express";
import axios from "axios";

const app=express();
const port=3000;

app.use(express.static("public"))

app.get("/", async (req,res)=>{
    try{
    const data = await axios.get("https://secrets-api.appbrewery.com/random"); 
    res.render("index.ejs",{
        secret:data.data.secret,
        user:data.data.username
    })
    }catch(error){
        console.log(error.message);
    }
})

app.listen(port,()=>{
    console.log(`listening on ${port} port link: http://localhost:${port}`)
})