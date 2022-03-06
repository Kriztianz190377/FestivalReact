import React from 'react'
import VocalistAvif from '../build/img/imagen_vocalista.avif'
import VocalistJpg from '../build/img/imagen_vocalista.jpg'
import VocalistWebp from '../build/img/imagen_vocalista.webp'

export const Festival = () => {
    const styles = {
        width: '200px',
        height: '300px'
    }

    return (
        <section className=" container about-festival">
            <div className="image">
                <picture>
                    <source srcSet={VocalistAvif} type="image/avif" alt="Vocalist" />
                    <source srcSet={VocalistWebp} type="image/webp" alt="Vocalist" />
                    <img loading="lazy" style={styles} src={VocalistJpg} alt="Vocalista" />
                </picture>
                           

            </div>

            <div className="content-festival">
                <h2>Rock & EDM Festival</h2>
                <p className="date">July 2023, Montréal, Canada</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor expedita nulla dignissimos repellendus corporis excepturi enim eum?
                    Tenetur rerum excepturi natus dicta ullam sit, fuga asperiores maxime
                    distinctio rem doloremque?</p>
            </div>
        </section>
    )
}
