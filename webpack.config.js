const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //En estas variables llamamos a todos nuestros plugin a través de un export de la dependencia descargada en npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = { //Este es un objeto donde van a vivir todas nuestras configuraciones
    entry: './src/index.js', //Nuestro punto de entrada principal
    output: { //Como se va a preparar nuestro proyecto
        path: path.resolve(__dirname, 'dist'), //Nos mostrará donde estamos ubicados y creará la carpeta dist
        filename: 'bundle.js', //Acá estará nuestro resultado de nuestro output
        publicPath: "./",
        clean: true //Nos ayuda a limpiar el codigo
    },
    resolve: { //En el resolve podremos resolver todas las extensiones con las que vamos a trabajar
        extensions: [
            '.js', '.jsx'
        ],
        alias: {
            "@components": path.resolve(__dirname, 'src/components/'),
            "@styles": path.resolve(__dirname, 'src/styles/')
        }
    },
    mode: 'production',
        module: { //Dentro del modulo podremos crear las reglas de nuestro proyecto
        rules: [
            {
                test: /\.(js|jsx)$/, //Identificamos las extensiones con las que trabajaremos
                exclude: /node_modules/, //Excluimos las que no queramos que se vean
                use: {
                    loader: 'babel-loader', //Identificamos los loaders que usaremos
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css'
            })
        ],
        optimization: { //En este bloque se agregan todos los plugin que nos sirvan para optmiziar algo de la app
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin(),
            ]
        }
}