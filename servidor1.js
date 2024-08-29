const express =require("express");
const path= require('path');

const apli=express();
apli.get('/', (req, res) =>{
res.sendfile(path.join(path.dirname(__filename), '/index.html'));
});

apli.listen(3000, ()=>{
    console.log('iniciando serevidor en http://localhost:3000');

})