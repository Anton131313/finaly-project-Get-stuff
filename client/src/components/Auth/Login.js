import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/userAction';

function Login() {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signIn(payload, navigate, setError));
    } else {
      dispatch(signIn(payload, navigate));
    }
  };

  return (
    <center>
      <div className="login content">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              onChange={changeHandler}
              value={userSignIn.email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите почту"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input
              onChange={changeHandler}
              value={userSignIn.password}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Введите пароль"
            />
            { error ? <p>*Ввведите правильный логин или пароль</p> : <p />}
          </div>
          <button type="submit" className="btn btn-warning">Авторизоваться</button>
        </form>
      </div>
    </center>
  );
}

export default Login;
