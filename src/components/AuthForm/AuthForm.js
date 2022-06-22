import './AuthForm.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm({ header, buttonName, linkText, linkLead, linkTo, children }) {

    const location = useLocation();

    return (
        <section className='authForm'>
            <Link to='/'><img className='logo logo_type_auth' src={logo} alt='логотип'></img></Link>
            <form className='form'>
                <h2 className='form__header'>{header}</h2>
                <div className='form__input-wrapper'>
                    {children}
                </div>
                <button className={`form__button ${location.pathname === '/signin' && 'form__button_type_login'}`}>{buttonName}</button>
            </form>
            <span className='form__signin'>{linkText} <Link className="form__link" to={linkTo}>{linkLead}</Link></span>
        </section>
    )
}

export default AuthForm;