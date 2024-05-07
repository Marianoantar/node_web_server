//  carga y configura las variables de entorno definidas en archivo .env 
// en la aplicación Node.js utilizando la librería dotenv.
// required carga libreria dotenv
// config() es un metodo de la libreria que carga las variables de entorno
//  definidas en el archivo .env en el objeto process.env de Node.js. 
// Esto hace que las variables de entorno definidas en el archivo .env
//  estén disponibles en toda tu aplicación Node.js.
// require('dotenv').config();
import env from 'dotenv';
env.config();

// importar la función get de la librería env-var para acceder y gestionar
//  las variables de entorno de tu aplicación de una manera más estructurada
//  y fácil de usar.
// const { get } = require('env-var');
import envvar from 'env-var';

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
};

// module.exports = { 
//     envs
// };