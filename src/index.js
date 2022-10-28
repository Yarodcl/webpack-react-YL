import React from "react"; //De esta forma invocamos React en nuestro documento
import ReactDOM from "react-dom"; //Llamamos una de las dependencias instaladas anteriormente
import App from './components/App'; //Llamamos nuestra APP
import './styles/global.scss';

ReactDOM.render(<App/>, document.getElementById('app')); //Así mostramos nuestra aplicacion desde un archivo HTML