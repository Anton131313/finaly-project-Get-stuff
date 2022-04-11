import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductFromDB } from '../../redux/thunks/productsThunk';

const { REACT_APP_HOST: host } = process.env;

function BiddingCard({
  id, img, title, info, condition, location, buttonState,
}) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteProductFromDB(id));
  };

  console.log(id, img, title, info, condition, location);
  return (
    <div className="col md-3 mb-4">
      <div className="card h-100 text-center p-4 col card-content">
        <img
          src={`${host}/img/${img}`}
          className="card-img-top"
          alt={title}
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title mb-0">{title}</h5>
          <span>
            Состояние:
            {' '}
            {condition}
          </span>
        </div>
        <div>
          <Link to={`/bidding/${id}`}><button type="button" className="btn btn-info mx-4">Детали</button></Link>
          { buttonState ? (
            <button onClick={() => deleteHandler(id)} type="button" className="btn btn-info">
              <i className="material-icons">delete_outline</i>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BiddingCard;
