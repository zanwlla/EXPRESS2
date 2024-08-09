const express=require('express')
const app=express();

app.listen(3000,()=>{
    console.log("Olá povo abençoado, servidor no ar")
})
//dados de clientes
const clientes=[
    {id:1, nome: "Altamiro",telefone: "111111111", email: "alta@gmail.com"},
    {id:2, nome: "Gerson",telefone: "222222222", email: "ge@gmail.com"},
    {id:3, nome: "Aline",telefone: "333333333", email: "line@gmail.com"},
    {id:4, nome: "Luisa",telefone: "444444444", email: "lu@gmail.com"},
    {id:5, nome: "Rafael",telefone: "555555555", email: "rafa@gmail.com"},
]

//rotas
app.get('/',(req,res)=>{
    res.send('API de Clientes')
})
//rota 2 - total de clientes
app.get('/total_clientes',(req,res)=>{
    res.send('Total de clientes: '+clientes.length);
})  
//rota 3 - apresentar dados de um cliente específico
app.get('/clientes/:id', (req,res)=>{
    const cliente= clientes.find(c=>c.id===parseInt(req.params.id));

//se o cliente não existe
if(!cliente) res.status(404).send("Cliente não encontrado!!");

//se o cliente existe, vamos apresentar uma frase de resposta
    res.send(`O cliente é:${cliente.nome}, telefone:${cliente.telefone}, email: ${cliente.email}`);

})