//Express

const bodyParser = require('body-parser');
const express = require('express');


const app=express();
app.use(express.urlencoded({limit:'50mb',extended:true}))


app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))


let demo =[];

app.post('/demos',(req,res)=>
{
    const {title, description} = req.body;
    const newdemo =
    {
        id: demo.length+1,
        title,
        description
    };
    demo.push(newdemo);
    console.log(demo);
    res.status(201).json(newdemo)

})

const port=3000;

app.listen(port, () =>
{
    console.log("Server is running on port"+port);
})