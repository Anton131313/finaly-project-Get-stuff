import {Link} from 'react-router-dom';
const Header = () => {
  return (
  <>
  <nav className="cyan darken-2">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">GetХлам</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link className="nav-link active" to="/login">
              Войти</Link></li>
        <li><Link className="nav-link active" to="/signup">
              Регистрация</Link></li>
      </ul>
    </div>
  </nav>
  </>);
}

export default Header;
