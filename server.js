const express=require('express')
const server=express()

server.listen(3000)

//middleware
// server.use((req,res)=>{
//     console.log('teste')
// })

server.use((req,res,next)=>{
    console.log('teste1');
    next();
})
server.use((req,res,next)=>{
    res.requesteTime=Date.now();
    next()
})
server.get('/',(req,res)=>{
    console.log(req,requesteTime)
    res.send('<h1>Teste de Conexão</h1>')
})