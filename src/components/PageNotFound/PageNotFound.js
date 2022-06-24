import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h2 className="pageNotFound__header">404</h2>
      <p className="pageNotFound__text">Страница не найдена</p>
      <Link className="pageNotFound__back" to="/">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
