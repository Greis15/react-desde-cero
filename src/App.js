// import React, {Fragment} from 'react';
import React from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"
import banner from "./banner.jpg"

const cursos = [
    {
        "title": "React desde cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "price" : 20,
        "profesor": "Beto Quiroga"
    }, {
        "title": "Javascript desde cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/medium/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
        "price" : 30,
        "profesor": "Beto Quiroga"
    }, {
        "title": "CSS Avanzado",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/medium/262e68b3-eea2-43f2-9e9a-febc106a8295.png",
        "price" : 40,
        "profesor": "Beto Quiroga"
    }, {
        "title": "MySql",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/medium/dc8c97f5-9026-443b-b1c9-1e9dfe29712c.jpg",
        "price" : 50,
        "profesor": "Beto Quiroga"
    }
]

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
{/*                  
            <Curso 
            //dando las porpiedades al componente
                // title="HTML desde cero" 
                // image= "https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png" 
                // price = {30}
                // profesor= "Beto Quiroga"
            />   */}

            {
                cursos.map(curso => <Curso title={curso.title} image={curso.image} price = {curso.price} profesor = {curso.profesor} />)
            }   

        </div>        
    </>
)

export default App;
