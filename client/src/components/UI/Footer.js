import React from 'react';
import style from '../MainPage/MainPage.module.css';

function Footer() {
  return (
    <div className={style.footerdesc}>
      <nav className={`navbar navbar-expand-lg navbar-success fixed-bottom ${style.headercolor}`}>
        <div className="container-fluid">
          <footer className="text-center text-lg-start text-black p-3">
            © 2022 Copyright
            <br />
            Служба поддержки: support@getstuff.ru
          </footer>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
