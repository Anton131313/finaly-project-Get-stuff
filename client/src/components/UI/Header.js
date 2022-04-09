import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import style from '../MainPage/MainPage.module.css';

function Header() {
  const user = useSelector((state) => state.user);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${style.headercolor}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GetХлам</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/logout">Выход</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={`/profile/${user.id}`}>Личный кабинет</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">Вход</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">Регистрация</Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Поиск</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Header;
