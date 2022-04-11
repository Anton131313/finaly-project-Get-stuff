import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsFromDB } from '../../redux/thunks/productsThunk';

function AuctionCard() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsFromDB());
  }, []);
  console.log('=============>', products);
  return (
    <div>
      <div>Products.img</div>
      <div>Products.title</div>
      <div>Products.info</div>

      <div>Products.user_id.USER</div>
      <div>Products.user_id.USER.photo</div>
      
      <div>Products.category_id.CATEGORY</div>
      <div></div>
    </div>
  );
}

export default AuctionCard;
