import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useFormWithValidation } from "../useFormWithValidation/useFormWithValidation";
import "./Profile.css";

function Profile({
  handleUpdateProfile,
  loggedIn,
  onHandleExit,
  isRequestSuccessful,
  isInfoTooltipOpen,
  onCloseInfoTooltip,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [isInfoChanged, setIsInfoChanged] = useState(false);

  React.useEffect(() => {
    currentUser.name !== values.name || currentUser.email !== values.email
      ? setIsInfoChanged(true)
      : setIsInfoChanged(false);
  }, [currentUser.name, currentUser.email, values.email, values.name]);

  React.useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email }, {}, false);
  }, [resetForm, currentUser]);

  function handleUpdateUserInfoSubmit(event) {
    event.preventDefault();
    handleUpdateProfile(values);
    resetForm({ name: currentUser.name, email: currentUser.email }, {}, false);
  }

  function exit() {
    onHandleExit();
  }

  function handlerEdit(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="profile">
        <form
          className="profile__wrapper"
          onSubmit={handleUpdateUserInfoSubmit}
        >
          <h2 className="profile__header">Привет, {currentUser.name}!</h2>
          <div className="profile__info">
            <div className="profile__info-wrapper">
              <label className="profile__input-label" htmlFor="name">
                Имя
              </label>
              <input
                id="name"
                type="text"
                className="profile__input profile__input_type_name"
                name="name"
                value={values.name || ""}
                onChange={handleChange}
                required
                minLength="2"
                maxLength="30"
              ></input>
            </div>
            <span className="profile__error">{errors.name}</span>
            <div className="profile__info-wrapper">
              <label className="profile__input-label" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                className="profile__input profile__input_type_email"
                type="email"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                required
              ></input>
            </div>
            <span className="profile__error">{errors.email}</span>
          </div>
          <div className="profile__buttons-wrapper">
            {!isInfoChanged && (
              <>
                <button
                  type="submit"
                  className="profile__button profile__button_type_edit"
                  onClick={handlerEdit}
                >
                  Редактировать
                </button>
                <button
                  className="profile__button profile__button_type_exit"
                  onClick={exit}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}

            {isInfoChanged && (
              <button
                className="profile__button profile__button_type_save"
                disabled={!isValid}
                onClick={handleUpdateUserInfoSubmit}
              >
                Сохранить
              </button>
            )}
          </div>
        </form>
      </section>
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={onCloseInfoTooltip}
        isRequestSuccessful={isRequestSuccessful}
      />
    </>
  );
}

export default Profile;
