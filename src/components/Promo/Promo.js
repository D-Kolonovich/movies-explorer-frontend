import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className='promo__more-btn'>
                <a className="promo__button-link" href="#about-project">
                Узнать больше
                </a>
                </button>
            </div>
        </section>
    )
}

export default Promo;