import Link from 'next/link'
import React from 'react'

const Jumbotron = () => {
    return (
        <div className="container mx-auto pt-28 pb-16 px-10 lg:p-64" id="home">
            <h3 className="text-[34px]">Graphic / UI UX  Designer</h3>
            <h2 className="leading-none text-[85px]">Ali Creative</h2>
            <p className="text-lg">
                ¡Hola! Soy Alicia Palacio Jimenez, Diseñadora gráfica apasionado/a por [Tu área de interés].
                En este portafolio, podrás encontrar una muestra de mi trabajo, incluyendo proyectos personales y profesionales.
            </p>
            <Link
                href="/about"
                className="flex items-center text-[22px] text-[#0E6C3F]">
                Conoce más sobre mi recorrido&nbsp;
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
        </div>
    )
}

export default Jumbotron