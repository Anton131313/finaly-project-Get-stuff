import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductFromDB } from '../../redux/thunks/productsThunk';

function BiddingCard({
  id, img, title, info, condition, location,
}) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteProductFromDB(id));
  };
  console.log(id, img, title, info, condition, location);
  return (
    <div className="card col" style={{ width: '18rem' }}>
      <img
        // src={`http://localhost:3001${img}`}
        src="https://amsterdam-life.info/wp-content/uploads/2019/03/Amsterdam-kanaly-1024x684.jpg"
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <button
        onClick={() => deleteHandler(id)}
        type="button"
        className="btn btn-danger"
      >
        Удалить
      </button>

      <button type="button" className="btn btn-info">
        <Link to={`/bidding/${id}`}>Поробности</Link>
      </button>
    </div>
  );
}

export default BiddingCard;
