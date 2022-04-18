import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAuctionData, createPriceData } from '../../redux/actions/auctionAction';
import Comments from './Comments';
import CountdownTimer from './CountdownTimer';

const { REACT_APP_HOST: host } = process.env;

function AuctionCard() {
  const id = useParams();
  const auction = useSelector((store) => store.auction);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [bid, setBids] = useState(auction['Bidding.price_step']);
  const [price, setPrice] = useState(JSON.parse(localStorage.getItem('redux')).auction['Bidding.price']);
  const [priceChanged, setPriceChanged] = useState(false);

  useEffect(() => {
    // setPrice(localStorage.getItem('Bidding.price'));
    dispatch(getAuctionData(id));
    console.log(JSON.parse(localStorage.getItem('redux')).auction['Bidding.price']);
    // window.location.reload(false);
  }, []);

  console.log('***********************', id);
  // const inputState = '';
  // if (+auction['Bidding.price'] === 0) { inputState = 'заберет бесплатно'; }
  // else { inputState = auction['Bidding.price_step']; }

  const handleUp = () => {
    console.log(+bid, +auction['Bidding.price_step'], 2);
    setBids(Number(bid) + Number(auction['Bidding.price_step']));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    // if (Number(bid)) {
    if (!priceChanged) {
      const newPrice = Number(bid) + +JSON.parse(localStorage.getItem('redux')).auction['Bidding.price'];
      // } else {
      //   newPrice = bid;
      // }
      setPrice((Number(bid) + +JSON.parse(localStorage.getItem('redux')).auction['Bidding.price']));
      setPriceChanged(true);
      setBids(Number(auction['Bidding.price_step']));
      const payload = { price: newPrice };
      dispatch(createPriceData(id, payload));
    } else {
      const newPrice = Number(bid) + Number(price);
      // } else {
      //   newPrice = bid;
      // }
      setPrice((Number(bid) + Number(price)));
      setBids(Number(auction['Bidding.price_step']));
      const payload = { price: newPrice };
      dispatch(createPriceData(id, payload));
    }
  };

  console.log('***********************', auction);

  let cardData;
  let dateTimeAfterThreeDays;

  function aux() {
    try {
      cardData = auction['Bidding.end_bidding'].split(' ').map((el) => el.split('-').join(' ')).join(' ').split(' ');
      console.log(cardData);
      dateTimeAfterThreeDays = Date.UTC(
        cardData[2],
        (Number(cardData[1]) - 1),
        cardData[0],
        (Number(cardData[3]) - 3),
        cardData[4],
      );
    } catch (e) {
      console.log(e);
    }
  }

  aux();

  console.log('=============>', auction);
  return (
    <div className="container mt-5 mb-6">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card auctionCard rounded">
            <img
              src={`${host}/img/${auction.img}`}
              className="card-img-top"
              alt={auction.title}
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
            <p className="ml-1 fw-bold">Окончание торгов: &nbsp;</p>
            <p>
              {auction['Bidding.end_bidding']}
            </p>
          </div>
          <div className="card-content">
            <p className="lead fw-bold">
              Цена:&nbsp;
              {!priceChanged ? JSON.parse(localStorage.getItem('redux')).auction['Bidding.price'] : price}
              {' '}
              ₽
            </p>
          </div>
          <div>
            <div className="d-flex align-items-center offers mb-1">
              <div>
                Ставка:
                {' '}
                <div><h4>{bid}</h4></div>
                { user && (
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
