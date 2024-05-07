// requiere la libreria express ya instalada
// const express = require('express');
import express from 'express';

// Requiere el modulo integrado 'path' que proporciona utilidades para
//  trabajar con rutas de archivos y directorios. las funciones y 
// propiedades que proporciona para manipular rutas de una manera 
// segura y eficiente en tu aplicación Node.js
// const path = require('path');
import path from 'path';

export const startServer = (options) => {
    const { port, public_path = 'public' } = options;

    // crea una instancia de la clase express
    const app = express();

    // para poder usar midlwares se usa la palabra 'use' (propio de EXPRESS)
    app.use(express.static(public_path)); // contenido estatico que ponemos disponible


    app.get('*', (req, res) =>{
        const idexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(idexPath);
    })

    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto: ${port}`);
    })

    // app.listen(port, () => {
    //     console.log(`Servidor corriendo en el puerto: ${port}`);
    // });
};

// module.exports = {
//     startServer
// }