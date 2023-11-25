const express = require('express');
const app=express();

app.get('/',(req,res) => {
    res.send("we learn sit 725");
});

app.listen(4000,()=>{
    console.log("listening to port 4000");
});