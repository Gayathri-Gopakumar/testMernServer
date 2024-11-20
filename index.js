const express=require('express')
const cors=require('cors')
require('dotenv').config()
const router=require('./routes/router')
require('./connections/connection')
const testServer=express()

testServer.use(cors())
testServer.use(express.json())
testServer.use(router)

const PORT=3000 || process.env.PORT

testServer.listen(PORT,()=>{
    console.log(`testServer started at port ${PORT} waiting for client req`);
})

// GET
testServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue">SERVER STARTED , RECEIVED GET REQ</h1>`)
})

// POST
testServer.post('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue">SERVER STARTED , RECEIVED POST REQ</h1>`)
})

// PUT
testServer.put('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue">SERVER STARTED , RECEIVED PUT REQ</h1>`)
})

//DELETE
testServer.delete('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue">SERVER STARTED , RECEIVED DELETE REQ</h1>`)
})
