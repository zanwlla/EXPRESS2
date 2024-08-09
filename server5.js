//rotas com pontos e hífens
const express=require('express')
const app=express();

app.listen(3000,()=>{
    console.log("Servidor no ar!")
})

//rotas base
app.get('/', (req,res)=>{
    res.send('Teste com parâmetros');
})

//rota com hífen
app.get('/distancia1/:pontoA-:pontoB',(req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB-pontoA;
    res.send(`A distância, usando hífen entre ${pontoA} e ${pontoB} é ${distancia}`);

})
//rota com ponto
app.get('/distancia2/:pontoA.:pontoB',(req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB-pontoA;
    res.send(`A distância, usando hífen entre ${pontoA} e ${pontoB} é ${distancia}`);

})
