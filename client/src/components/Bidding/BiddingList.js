import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsFromDB } from '../../redux/thunks/productsThunk';
import BiddingCard from './BiddingCard';

function BiddingList() {
  const products = useSelector((store) => store.products);
  const [buttonState, setbuttonState] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsFromDB());
    setbuttonState(false);
  }, []);
  console.log(999999999999, products);
  return (
    <div className="list mt-5">
      <div>
        <h3>Все объявления</h3>
      </div>
      {/* {pages.length && <Pagination />} */}
      {products?.map((el) => (
        <BiddingCard
          key={el.id}
          id={el.id}
          img={el.img}
          title={el.title}
          info={el.info}
          condition={el['Condition.nameCondition']}
          category={el['Category.nameCategory']}
          location={el.location}
          buttonState={buttonState}
        />
      ))}
    </div>
  );
}
export default BiddingList;
