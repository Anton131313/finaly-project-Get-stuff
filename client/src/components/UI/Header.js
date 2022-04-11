import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../MainPage/MainPage.module.css';
import { findProductsSaga } from '../../redux/actions/productsAction';

function Header() {
  const user = useSelector((state) => state.user);

  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(findProductsSaga(input));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setInput(search);
  }, [search]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${style.headercolor}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GetStuff</Link>
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
          <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" value={input} onChange={handleChange} />
            <button className="btn btn-outline-light" type="submit">Поиск</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Header;
