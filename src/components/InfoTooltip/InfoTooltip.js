import "./InfoTooltip.css";
import success from "../../images/success.svg";
import unsuccess from "../../images/unsuccess.svg";
import { useLocation } from "react-router-dom";

function InfoTooltip({ isOpen, onClose, isRequestSuccessful }) {
  const location = useLocation();

  const message = isRequestSuccessful
    ? "Всё прошло успешно!"
    : location.pathname === "/movies"
    ? "Во время запроса произошла ошибка. Подождите или попробуйте ещё раз"
    : "Что-то пошло не так! Попробуйте ещё раз.";

  const image = isRequestSuccessful ? success : unsuccess;

  return (
    <article className={`popup ${isOpen ? "popup_opened" : " "}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img className="popup__image-tooltip" src={image} alt="успешно" />
          <p className="popup__heading popup__heading-tooltip">{message}</p>
        </figure>
      </div>
    </article>
  );
}

export default InfoTooltip;
