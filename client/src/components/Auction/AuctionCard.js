import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAuctionData } from '../../redux/actions/auctionAction';

const { REACT_APP_HOST: host } = process.env;

function AuctionCard() {
  const id = useParams();
  const auction = useSelector((store) => store.auction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctionData(id));
  }, []);
  console.log('=============>', auction);
  return (
    <div>
      <div>
        <img
          src={`${host}/img/${auction.img}`}
          className="card-img-top"
          alt={auction.title}
        />
      </div>
      <div>{auction.title}</div>
      <div> </div>

      <div>Products.user_id.USER</div>
      <div>Products.user_id.USER.photo</div>

      <div>Products.category_id.CATEGORY</div>
      <div />
    </div>
  );
}

export default AuctionCard;
