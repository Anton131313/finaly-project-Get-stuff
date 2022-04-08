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
            <button className="waves-effect cyan waves-teal btn-flat">зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
