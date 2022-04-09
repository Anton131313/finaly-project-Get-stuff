import React from 'react';
import { Link } from 'react-router-dom';

function BiddingCard() {
  return (
    <div className="card col" style={{ width: '18rem' }}>
      <img
        src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
        className="card-img-top"
        alt="хардкод"
      />
      <div className="card-body">
        <h5 className="card-title">фотка</h5>
      </div>
      <button
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>

      <button type="button" className="btn btn-info">
        <Link to="/bidding/1">Подробнее</Link>
      </button>
    </div>
  );
}

export default BiddingCard;
