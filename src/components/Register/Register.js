import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';

function Register({onRegister}) {
    function handleSubmit(e, values) {
        e.preventDefault();
        onRegister(values);
      }

      const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    return (
        <AuthForm header='Добро пожаловать!' buttonName='Зарегистрироваться' linkText='Уже зарегистрированы?' linkLead='Войти' linkTo='/signin' handleSubmit={handleSubmit}>
            <label className='label__form' htmlFor='register-name'>Имя</label>
            <input className='input__form input__form_type_name' type='text' id='register-name' name='name' value={values.name || ''} onChange={handleChange} required minLength='2' maxLength='30'></input>
            <label className='label__form' htmlFor='register-email'>E-mail</label>
            <input type='email' id='register-email' className='input__form input__form_type_email' name='email' value={values.email || ''} onChange={handleChange} required></input>
            <label className='label__form' htmlFor='register-password'>Пароль</label>
            <input className='input__form input__form_type_password' type='password' name='password' value={values.password || ''} onChange={handleChange} id='register-password' required minLength='8' maxLength='30'></input>
            <span className='form__error'>Что-то пошло не так...</span>
        </AuthForm>
    )
}

export default Register;