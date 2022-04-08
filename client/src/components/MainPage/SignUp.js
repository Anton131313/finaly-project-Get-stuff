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
      dispatch(signUp(payload, navigate));
    }
  };

  return (
    <div className="content user">
      <div className="row">
        <form onSubmit={submitHandler} className="col s12">
          <div className="row">
            <div className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={changeHandler} id="icon_prefix" className="validate" value={userSignUp.name} type="text" name="name" placeholder="Имя" />
            </div>
            <div className="input-field">
              <i className="material-icons prefix">alternate_email</i>
              <input onChange={changeHandler} id="icon_telephone" className="validate" value={userSignUp.email} type="email" name="email" placeholder="email" />
            </div>
            <div className="input-field">
              <i className="material-icons prefix">key</i>
              <input onChange={changeHandler} id="icon_password" className="validate" value={userSignUp.password} type="password" name="password" placeholder="Пароль" />
            </div>
            <button type="submit" className="waves-effect cyan waves-teal btn-flat">зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
