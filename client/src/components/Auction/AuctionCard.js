import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createPriceData } from '../../redux/actions/auctionAction';
import Comments from './Comments';
import CountdownTimer from './CountdownTimer';

const { REACT_APP_HOST: host } = process.env;

function AuctionCard() {
  const id = useParams();
  const auction = useSelector((store) => store.auction);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAuctionData(id));
  //   console.log('12312312321312123');
  //   // setInputs(`${auction['Bidding.price']}`);
  // }, []);

  console.log('***********************', id);
  const inputState = '';
  // if (+auction['Bidding.price'] === 0) { inputState = 'заберет бесплатно'; }
  // else { inputState = auction['Bidding.price_step']; }

  const [input, setInputs] = useState(inputState);

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

  console.log('***********************', auction);

  let cardData;
  let dateTimeAfterThreeDays;

  function aux() {
    try {
      cardData = auction['Bidding.end_bidding'].split(' ').map((el) => el.split('-').join(' ')).join(' ').split(' ');
      dateTimeAfterThreeDays = Date.UTC(
        cardData[2],
        (Number(cardData[1]) - 1),
        cardData[0],
        cardData[3],
        cardData[4],
      );
    } catch (e) {
      console.log(e);
    }
  }

  aux();

  console.log('=============>', auction);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card auctionCard rounded">
            <img
              src={`${host}/img/${auction.img}`}
              className="card-img-top"
              alt={auction.title}
              height="400px"
              width="400px"
            />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="d-flex align-items-center offers mb-1">
            <span className="text-uppercase text-black-50">Категория:</span>
            <span className="text-uppercase text-black-50">
              &nbsp;
              {auction['Category.nameCategory']}
              <br />
            </span>
          </div>
          <h5 className="display-6">
            {' '}
            {auction.title}
          </h5>
          <div className="d-flex align-items-center offers">
            <p className="ml-1 font-weight-bold">Местонахождение товара:</p>
            <p className="ml-1 fw-bold">
              {' '}
              &nbsp;
              {auction.location}
              <br />
            </p>
          </div>
          <div className="d-flex align-items-center offers">
            <p className="ml-1 font-weight-bold">Состояние:</p>
            <p className="ml-1 fw-bold">
              {' '}
                &nbsp;
              {auction['Condition.nameCondition']}
              <br />
            </p>
          </div>
          <div className="d-flex align-items-center offers">
            <p>Владелец товара:</p>
            <p>
            &nbsp;
              {auction['User.name']}
            </p>
          </div>
          <div className="card-content">
            <p className="ml-1 font-weight-bold">Описание товара:</p>
            <p className="d-flex offers mb-1 ml-1 fw-normal">
                &nbsp;
              {auction.info}
              <br />
            </p>
          </div>
          <div className="d-flex align-items-center offers mb-1">
            <p className="ml-1 fw-bold">Окончание торгов через: &nbsp;</p>
            <p>
              {auction['Bidding.end_bidding']}
            </p>
          </div>
          <div className="card-content">
            <p className="lead fw-bold">
              Цена:&nbsp;
              {(+auction['Bidding.price'] === 0)
                ? 'Приезжай забирай'
                : auction['Bidding.price']}
              {' '}
              ₽
            </p>
          </div>
          <div>
            <div className="d-flex align-items-center offers mb-1">
              <div>
                Ставка:
                {' '}
                <div><h4>{input}</h4></div>
                { (+auction['Bidding.price'] === 0)
                  ? (<button type="submit" className="btn btn-warning" onClick={handleCreate}>Забрать бесплатно</button>)
                  : (
                    <div className="row">

                      <div className="mt-3">
                        <button className="btn btn-outline-dark mr-2" onClick={handleUp} type="submit">Поднять ставку</button>
                        <button type="submit" className="btn btn-outline-primary mx-3" onClick={handleCreate}>Сделать ставку</button>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <Comments />
    </div>
  );
}

export default AuctionCard;
