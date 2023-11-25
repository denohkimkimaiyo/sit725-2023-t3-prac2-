const express = require("express");
const web = express();

web.get('/',(req,res) => {
    res.send('we learn sit 725');
});

web.listen(4000,()=>{
    console.log('listening to port 4000');
});