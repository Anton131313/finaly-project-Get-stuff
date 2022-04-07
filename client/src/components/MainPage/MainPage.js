import React from 'react';
import Banner from './Banner';
import style from './MainPage.module.css';

function MainPage() {
  return (
    <div className={style.content}>
      <center>
        <Banner />
      </center>
    </div>
  );
}

export default MainPage;
