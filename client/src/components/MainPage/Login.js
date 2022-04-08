import React from 'react';

function Login() {
  return (
    <center>
      <div className="login content">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите почту" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Введите пароль" />
          </div>
          <button type="submit" className="btn btn-warning">Авторизоваться</button>
        </form>

      </div>
    </center>
  );
}

export default Login;
