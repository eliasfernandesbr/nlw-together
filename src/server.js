const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.json({
        message: 'Controle de pessoas',
        nome: 'Elias Fernandes',
        idade: 29,
        numFilhos: 0,
        cidade: 'Curitiba',
        estado: 'Paraná',
        pais: 'Brasil'
    })
})

app.listen(port, ()=>{
    console.log('🔸Servidor Iniciado🔸')
})

