import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAuctionData } from '../../redux/actions/auctionAction';
import Comments from './Comments';

const { REACT_APP_HOST: host } = process.env;

function AuctionCard() {
  const id = useParams();
  const auction = useSelector((store) => store.auction);
  const dispatch = useDispatch();
  const [input, setInputs] = useState({ ...auction });

  useEffect(() => {
    dispatch(getAuctionData(id));
  }, []);

  console.log('=============>', auction);

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleCreate = () => {
    // e.preventDefault();
    // const payload = { text: input };
    // dispatch(createCommentData(id, payload));
    // setComent(commentsData);
    // setInputs('');
  };

  return (
    <>
      <div className="col md-3 mb-4">
        <div className="d-flex card h-100 text-center p-4 col card-content">
          <span>
            Владелец товара:
            {' '}
            {auction['User.name']}
          </span>
          <img
            src={`${host}/img/${auction.img}`}
            className="card-img-top"
            alt={auction.title}
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title mb-0">
              Товар:
              {' '}
              {auction.title}
            </h5>
            <div>
              Описание товара:
              {' '}
              {auction.info}
            </div>
            <span>
              Категория:
              {' '}
              {auction['Category.nameCategory']}
            </span>
            {' '}
            <span>
              Состояние:
              {' '}
              {auction['Condition.nameCondition']}
            </span>
            {' '}
            <span>
              Локация:
              {' '}
              {auction.location}
            </span>
          </div>
          <div />
          <div>
            <div>
              Окончание торгов через:
              {' '}
              {auction['Bidding.end_bidding']}
            </div>
            <div>
              Цена:
              {' '}
              {(+auction['Bidding.price'] === 0)
                ? 'Приезжай забирай'
                : auction['Bidding.price']}
            </div>
            <div>
              Ставка:
              {' '}
              <input
                onChange={handleChange}
                value={(+auction['Bidding.price'] === 0)
                  ? 'Приеду заберу'
                  : input['Bidding.price_step']}
                type="text"
                name="text"
                className="form-control"
                required
              />
              <button type="submit" className="btn btn-warning" onClick={handleCreate}>Сделать ставку</button>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </>
  );
}

export default AuctionCard;
