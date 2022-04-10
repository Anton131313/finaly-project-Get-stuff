import React from 'react';
import style from '../MainPage/MainPage.module.css';

function Footer() {
  return (
    <div className={style.footerdesc}>
      <nav className={`navbar navbar-expand-lg navbar-success ${style.headercolor}`}>
        <div className="container1">
          <footer className="text-center text-lg-start text-black">
            <div className="text-center">
              © 2022 Copyright:
              <p className="text-black" href="/">
                Служба поддержки: support@getstuff.ru
              </p>
            </div>
          </footer>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
