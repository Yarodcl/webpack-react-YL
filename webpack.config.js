const path = require('path');

module.exports = { //Este es un objeto donde van a vivir todas nuestras configuraciones
    entry: '.src/index.js', //Nuestro punto de entrada principal
    output: { //Como se va a preparar nuestro proyecto
        path: path.resolve(__dirname, 'dist'), //Nos mostrará donde estamos ubicados y creará la carpeta dist
        filename: 'bundle.js' //Acá estará nuestro resultado de nuestro output
    },
    resolve: { //En el resolve podremos resolver todas las extensiones con las que vamos a trabajar
        extensions: [
            '.js', '.jsx'
        ],
        module: { //Dentro del modulo podremos crear las reglas de nuestro proyecto
        rules: [
            {
                test: /\.(js|jsx)$/, //Identificamos las extensiones con las que trabajaremos
                exclude: /node_modules/, //Excluimos las que no queramos que se vean
                use: {
                    loader: 'babel-loader', //Identificamos los loaders que usaremos
                }
            }
        ]
        },
        devServer: { //Nos permite crear un server local para ver cambios en vivo
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 3006,
            open: true,
        }
    }
}