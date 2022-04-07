const Login = () => {
  return (
  <>
   <div className="content user">
   <div className="row">
     <form className="col s12">
       <div className="row">
        <div className="input-field">
          <i className="material-icons prefix">alternate_email</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label for="icon_telephone">email</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">key</i>
          <input id="icon_password" type="password" className="validate" />
          <label for="icon_password">Пароль</label>
        </div>
        <button className="waves-effect cyan waves-teal btn-flat">Войти</button>
      </div>
    </form>
  </div>

</div>

  </>);
}

export default Login;
