//Inyectar la dependencia de express
const express = require('express'); 
const app = express();  // se declara la app de express

app.get('/', (req, res) => { // definir ruta al nivel de la raiz '/'
    res.send('Hello World, this is the root route'); //mensaje
});

app.get('/uno', (req, res) => { // definir segunda ruta, '/uno'
    res.send('Hello World, from route One'); //mensaje
});

app.get('/prueba', (req, res) => { // definir tercera ruta '/prueba'

    //res.send('Hello World, from route Prueba'); // mensaje

    //se modifico para que mostrase contenido html --> mensaje
    
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p> Hello World, from route Prueba </p>
    </body>
    </html>`);
});

app.listen(3000); // se pone el servidor a la escucha 