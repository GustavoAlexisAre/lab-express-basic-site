
//llamamos al express

const express = require("express");

const app = express();

app.use(express.static('public'));

//url

app.get('/', (req, res, next) => res.sendFile(__dirname + '/views/index.html'));

app.get('/about', (req, res, next) => res.sendFile(__dirname + '/views/about.html'));

app.get('/works', (req, res, next) => res.sendFile(__dirname + '/views/works.html'));

app.get('/photo-gallery', (req, res, next) => res.sendFile(__dirname + '/views/photo.html'));



//Abrimos el puerto

app.listen(3000, () => {
    console.log("Aplicacion lista en puerto 3000")
})

