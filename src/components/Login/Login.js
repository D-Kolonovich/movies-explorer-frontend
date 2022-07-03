import AuthForm from "../AuthForm/AuthForm";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useFormWithValidation } from "../useFormWithValidation/useFormWithValidation";

function Login({onLogin, isRequestSuccessful, isInfoTooltipOpen, onCloseInfoTooltip}) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values);
      }

  return (
    <>
      <AuthForm
      header="Рады видеть!"
      buttonName="Войти"
      linkText="Ещё не зарегистрированы?"
      linkLead="Регистрация"
      linkTo="/signup"
      handleSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="label__form" htmlFor="login-email">
        E-mail
      </label>
      <input
        className="input__form input__form_type_email"
        type="email"
        id="login-email"
        required
        name='email' value={values.email || ''} onChange={handleChange}
      ></input>
      <span className='form__error'>{errors.email}</span>
      <label className="label__form" htmlFor="login-password">
        Пароль
      </label>
      <input
        className="input__form input__form_type_password"
        type="password"
        id="login-password"
        required
        minLength="8"
        maxLength="30"
        name='password' value={values.password || ''} onChange={handleChange}
      ></input>
      <span className='form__error'>{errors.password}</span>
    </AuthForm>
    <InfoTooltip isOpen={isInfoTooltipOpen} onClose={onCloseInfoTooltip} isRequestSuccessful={isRequestSuccessful} />
    </>
    
  );
}

export default Login;
