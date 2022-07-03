import AuthForm from "../AuthForm/AuthForm";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useFormWithValidation } from "../useFormWithValidation/useFormWithValidation";

function Register({
  onRegister,
  isRequestSuccessful,
  isInfoTooltipOpen,
  onCloseInfoTooltip,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <>
      <AuthForm
        isValid={isValid}
        header="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        linkText="Уже зарегистрированы?"
        linkLead="Войти"
        linkTo="/signin"
        handleSubmit={handleSubmit}
      >
        <label className="label__form" htmlFor="register-name">
          Имя
        </label>
        <input
          className="input__form input__form_type_name"
          type="text"
          id="register-name"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="30"
        ></input>
        <span className="form__error">{errors.name}</span>
        <label className="label__form" htmlFor="register-email">
          E-mail
        </label>
        <input
          type="email"
          id="register-email"
          className="input__form input__form_type_email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        ></input>
        <span className="form__error">{errors.email}</span>
        <label className="label__form" htmlFor="register-password">
          Пароль
        </label>
        <input
          className="input__form input__form_type_password"
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          id="register-password"
          required
          minLength="8"
          maxLength="30"
        ></input>
        <span className="form__error">{errors.password}</span>
      </AuthForm>
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={onCloseInfoTooltip}
        isRequestSuccessful={isRequestSuccessful}
      />
    </>
  );
}

export default Register;
