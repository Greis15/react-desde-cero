// import React, {Fragment} from 'react';
import React from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"
import banner from "./banner.jpg"

const App = () => (
    //DEVUELVE UN ELEMENTO (DIV) dentro de este si puede haber mas hijos

    //CUANDO TENEMOS DOS HIJOS
    // <Fragment>
    // <>
    //     <div className ="saludo">
    //         <h1>Hola mundo</h1>
    //         <p>Hola, saludando desde mi componente</p>
    //     </div>

    //     <div>
    //         <img src= "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"/>
    //     </div>
    // </>
    // </Fragment>

    <> 
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" alt= "banner" src= {banner}/>
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Curso de React</p>
                    <p> Subtítulo del banner</p>
                    <a href="#" class="button">Suscribirse</a>
                </div>
                </div>
            </div>
        </div>

        <div className="ed-grid m-grid-3">
            <Curso/>
            <Curso/>
            <Curso/>
            <Curso/>
            <Curso/>
            <Curso/>
            <Curso/>
            <Curso/>
            <Curso/>  
        </div>
    </>
)

export default App;
