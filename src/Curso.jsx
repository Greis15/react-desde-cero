import React from 'react'

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/original/fbda9747-85b7-482e-8ffc-547b98031ca4.png" alt="" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/78be1759-2624-4b20-b237-1bab3c934b2f.jpg" alt=""/>
                </div>
                </div>
                <span className="small">Alexys Lozada</span>
            </div>
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
            </div>
        </div>
    </article>
)

export default Curso;