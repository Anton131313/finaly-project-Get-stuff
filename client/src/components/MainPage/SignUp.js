import React from 'react';

function SignUp() {
  return (
    <div className="content user">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Имя</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">alternate_email</i>
              <input id="icon_telephone" type="tel" className="validate" />
              <label htmlFor="icon_telephone">email</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">key</i>
              <input id="icon_password" type="password" className="validate" />
              <label htmlFor="icon_password">Пароль</label>
            </div>
            <button type="submit" className="waves-effect cyan waves-teal btn-flat">зарегистрироваться</button>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите почту" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Придумайте пароль" />
          </div>
          <button type="submit" className="btn btn-warning">Регистрация</button>
        </form>
      </div>
    </div>

  );
}

export default SignUp;
