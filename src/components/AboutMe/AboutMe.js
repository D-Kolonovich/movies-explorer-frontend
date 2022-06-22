import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';
import me from '../../images/me.jpg';

function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <div className='about-me__wrapper'>
                <SectionTitle title='Студент' />
                <div className='about-me__info'>
                    <h2 className='about-me__name'>Дмитрий</h2>
                    <p className='about-me__description'>Фронтенд-разработчик, 24 год</p>
                    <p className='about-me__about'>Я родился и живу в Гродно, закончил факультет экономики и управления ГрГУ.
                        Я люблю слушать музыку, а ещё увлекаюсь ноутбуками. Недавно начал кодить.
                        С 2015 года работал в «Приорбанк». После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className='about-me__links'>
                        <li><a href='https://www.facebook.com/' target='blank'>Facebook</a></li>
                        <li><a href='https://github.com/D-Kolonovich' target='blank'>Github</a></li>
                    </ul>
                    <img className='about-me__photo' src={me} alt='фото'></img>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;