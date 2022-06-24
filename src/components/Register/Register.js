import AuthForm from '../AuthForm/AuthForm';

function Register() {
    return (
        <AuthForm header='Добро пожаловать!' buttonName='Зарегистрироваться' linkText='Уже зарегистрированы?' linkLead='Войти' linkTo='/signin' >
            <label className='label__form' htmlFor='register-name'>Имя</label>
            <input className='input__form input__form_type_name' type='text' id='register-name' required minLength='2' maxLength='30'></input>
            <label className='label__form' htmlFor='register-email'>E-mail</label>
            <input type='email' id='register-email' className='input__form input__form_type_email' required></input>
            <label className='label__form' htmlFor='register-password'>Пароль</label>
            <input className='input__form input__form_type_password' type='password' id='register-password' required minLength='8' maxLength='30'></input>
            <span className='form__error'>Что-то пошло не так...</span>
        </AuthForm>
    )
}

export default Register;