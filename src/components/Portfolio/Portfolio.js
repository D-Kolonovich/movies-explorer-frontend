import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__wrapper'>
                <h3 className='portfolio__title'>Портфолио</h3>
                <ul className='portfolio__list'>
                    <li><a href='https://github.com/D-Kolonovich/how-to-learn' target='blank'>Статичный сайт</a></li>
                    <li><a href='https://d-kolonovich.github.io/russian-travel/' target='blank'>Адаптивный сайт</a></li>
                    <li><a href='https://dkmesto.students.nomoredomains.xyz/' target='blank'>Одностраничное приложение</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;