import React from 'react'
import PropTypes from 'prop-types'
const mayorDeEdad = edad => edad > 18

//objeto props 
// const Curso = props => (
const Curso = ({title, image,price,profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt= {title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            {/* {
                mayorDeEdad(persona.edad)
                ?  <h3 className= "center">
                        Hola soy mayor 
                    </h3>
                
                : <p>Soy menor</p>
            } */}
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {`Profesor:${profesor}`}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">{`Precio del curso: ${price} $`}</a>
            </div>
        </div>
    </article>
)

//De esta manera declaramos propiedades por defecto
Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title:"No se encontro titulo",
    image: "https://www.ngenespanol.com/wp-content/uploads/2018/08/Una-gran-ciudad-en-blanco-y-Negro.jpg",
    price: "--",
    profesor: "--"
}

export default Curso;