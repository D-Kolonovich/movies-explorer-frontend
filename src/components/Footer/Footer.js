import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__content'>
                    <p className='footer__copyright'>&copy; 2022</p>
                    <ul className='footer__links'>
                        <li><a href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a></li>
                        <li><a href='https://github.com/D-Kolonovich' target='blank'>Github</a></li>
                        <li><a href='https://www.facebook.com/' target='blank'>Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;