// requiere el objeto envs del  envs.js para Subir y moldear envs
const { envs } = require('./config/env'); 

//requiere la funcion startServer para cargar envs desestructuradas e 
// para luego inicializar el servidor
const { startServer } = require('./server/server') 

// La funcion main() es llamada por la funcion ASINCRONA 
const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
};

// funcion agnóstica autoconvocada
// Agnóstica porque no tiene nombre
// Autoconvocada porque se ejecuta con los parentesis ultimos
(async() => {
    main()
})();