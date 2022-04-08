import React from 'react';

function Footer() {
  return (
    <footer className="page-footer cyan darken-2">
      <div className="footer-copyright">
        <div className="container">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Copyright Text
          <p>Служба поддержки: support@getkhlam.ru</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
