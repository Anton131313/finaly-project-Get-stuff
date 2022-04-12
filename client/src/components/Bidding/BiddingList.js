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
  // console.log(999999999999, products);
  return (
    <div className="my-5 py-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h2 className="display-6 fw-bolder text-center">Рекомендуемое</h2>
          <hr />
          <div className="buttons d-flex justify-content-center mb-2 pb-2">
            <button className="btn btn-outline-dark me-2">Все</button>
            <button className="btn btn-outline-dark me-2">Товары для дома</button>
            <button className="btn btn-outline-dark me-2">Одежда</button>
            <button className="btn btn-outline-dark me-2">Автотовары</button>
            <button className="btn btn-outline-dark me-2">Техника</button>
            <button className="btn btn-outline-dark me-2">Зоотовары</button>
            <button className="btn btn-outline-dark me-2">Товары для детей</button>
          </div>
        </div>
      </div>
      <div className="d-flex list">
        {/* {pages.length && <Pagination />} */}
        { products?.map((el) => (
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

    </div>
  );
}
export default BiddingList;
