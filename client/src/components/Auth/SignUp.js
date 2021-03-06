import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/actions/userAction';

function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signUp(payload, navigate, setError));
    } else {
      dispatch(signUp(payload, navigate));
    }
  };

  return (
    <center>
      <div className="reg content">
        <form onSubmit={submitHandler} className="col s12">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
            <input name="name" onChange={changeHandler} value={userSignUp.name} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите имя" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input name="email" onChange={changeHandler} value={userSignUp.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите почту" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input name="password" onChange={changeHandler} value={userSignUp.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Придумайте пароль" />
          </div>
          { error ? <p>*Такой профиль существует, войдите в свой профиль </p> : <p />}
          <button type="submit" className="btn btn-warning">Регистрация</button>
        </form>
      </div>
    </center>

  );
}

export default SignUp;
