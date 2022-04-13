import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createPriceData, getAuctionData } from '../../redux/actions/auctionAction';
import Comments from './Comments';
import CountdownTimer from './CountdownTimer';

const { REACT_APP_HOST: host } = process.env;

function AuctionCard() {
  const id = useParams();
  const auction = useSelector((store) => store.auction);
  const dispatch = useDispatch();

  const cardData = auction['Bidding.end_bidding']
    .split(' ')
    .map((el) => el.split('-').join(' '))
    .join(' ')
    .split(' ');
  const dateTimeAfterThreeDays = Date.UTC(
    cardData[2],
    (Number(cardData[1]) - 1),
    cardData[0],
    cardData[3],
    cardData[4],
  );

  let inputState = '';
  if (+auction['Bidding.price'] === 0) { inputState = 'заберет бесплатно'; } else { inputState = auction['Bidding.price_step']; }

  const [input, setInputs] = useState(inputState);

  useEffect(() => {
    // setInputs(`${auction['Bidding.price']}`);
    dispatch(getAuctionData(id));
  }, [input]);

  const handleUp = () => {
    console.log(+input, +auction['Bidding.price_step'], 2);
    setInputs(() => Number(input) + Number(auction['Bidding.price_step']));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    let newPrice = input;
    if (Number(input)) {
      newPrice = Number(input) + Number(auction['Bidding.price']);
    } else {
      newPrice = input;
    }
    const payload = { price: newPrice };
    dispatch(createPriceData(id, payload));
    setInputs(`${auction['Bidding.price']}`);
  };

  console.log('=============>', auction);
  return (
    <>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
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
              <div>
                Ставка:
                {' '}
                <input
                  value={input}
                  type="text"
                  name="text"
                  className="form-control"
                  required
                />
                { (+auction['Bidding.price'] === 0)
                  ? (<button type="submit" className="btn btn-warning" onClick={handleCreate}>Забрать бесплатно</button>)
                  : (
                    <>
                      <button type="submit" className="btn btn-warning" onClick={handleUp}>Поднять ставку</button>
                      <div>
                        <button type="submit" className="btn btn-warning" onClick={handleCreate}>Сделать ставку</button>
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </>
  );
}

export default AuctionCard;
