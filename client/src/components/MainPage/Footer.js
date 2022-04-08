import React from 'react';
import style from './MainPage.module.css';

function Footer() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-success ${style.headercolor}`}>
      <div className="container1">
        <footer className="text-center text-lg-start text-black">
          <div className="text-center p-3">
            © 2022 Copyright:
            <p className="text-black" href="/">
              Служба поддержки: support@getkhlam.ru
            </p>
          </div>
        </footer>
      </div>
    </nav>
  );
}

export default Footer;
