const express= require('express');
const app= express();
const port=process.env.port||3000;
const todosServices = require("./services/todosservices");
const todoRoutes= require ("./todoRoutes/todosroute");
const bodyparser=require("body-parser")

app.use (bodyparser.json());
app.use(bodyparser.urlencoded());
app.use ('/todos',todoRoutes);



app.get('/',(req,res)=>
{
    res.send("app is working")
})

app.listen(port,()=>
{
    console.log(`your server is working ${port}`);
})