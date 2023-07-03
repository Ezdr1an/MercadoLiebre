const express = require('express')
const PORT = 3030;
const path = require('path');
const app = express();
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,"views","home.html"))
});
app.get('/ofertas',(req,res) => {
    res.sendFile(path.join(__dirname,"views","ofertas.html"))
});
app.get('/tiendas',(req,res) => {
    res.sendFile(path.join(__dirname,"views","tiendas.html"))
});
app.get('/vender',(req,res) => {
    res.sendFile(path.join(__dirname,"views","vender.html"))
});
app.get('/ayuda',(req,res) => {
    res.sendFile(path.join(__dirname,"views","ayuda.html"))
});
app.get('/cuenta',(req,res) => {
    res.sendFile(path.join(__dirname,"views","crear-cuenta.html"))
});
app.get('/ingresar',(req,res) => {
    res.sendFile(path.join(__dirname,"views","login.html"))
});
app.get('/miscompras',(req,res) => {
    res.sendFile(path.join(__dirname,"views","compras.html"))
});

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
});