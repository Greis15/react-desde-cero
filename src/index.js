import React from 'react';
import ReactDOM from 'react-dom';
//IMPORTAR EL COMPONENTE APP
import App from './App';

const root = document.getElementById('root')

//SIN JSX
//crear un elemento para poder renderizarlo e imprimir en pantalla: 3 parametros componente, propiedades,hijos
// const elemento = React.createElement (componente , propiedades, hijos)

// const elemento = React.createElement("h1", {className: "Saludo"}, "Hola mundo")


//CON JSX
//necesita un elemento y un lugar en el documento html donde quiero insertar
// ReactDOM.render(<h1 className="saludos">Hola mundo</h1>, root );

//RENDERIZAR EL COMPONENTE APP
//todo componente tiene que tener etiqueta de apertura y cierre
ReactDOM.render(<App />, root)