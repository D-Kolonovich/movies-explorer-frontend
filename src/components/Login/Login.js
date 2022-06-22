
import AuthForm from '../AuthForm/AuthForm';

function Login() {
    return (
        <AuthForm header='Рады видеть!' buttonName='Войти' linkText='Ещё не зарегистрированы?' linkLead='Регистрация' linkTo='/signup'>
            <label className='label__form' htmlFor='login-email'>E-mail</label>
            <input className='input__form input__form_type_email' type='email' id='login-email' required></input>
            <label className='label__form' htmlFor='login-password' >Пароль</label>
            <input className='input__form input__form_type_password'  type='password' id='login-password' required minLength='8' maxLength='30'></input>
        </AuthForm>
    )
}

export default Login;