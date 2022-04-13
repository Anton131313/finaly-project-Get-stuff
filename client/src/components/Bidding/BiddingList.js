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
  const [filter, setFilter] = useState(products);
  const filterProduct = (category) => {
    const filteredProducts = products.filter((el) => el['Category.nameCategory'] === category);
    console.log('filter', filteredProducts);
    setFilter(filteredProducts);
  };
  console.log('tut');

  return (
    <div className="my-4 py-2">
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <h3 className="display-6 fw-bolder text-center">Все объявления</h3>
          <hr />
          <div className="buttons d-flex justify-content-center mb-2 pb-2">
            <button className="btn btn-outline-dark me-2" onClick={() => setFilter(products)}>Все</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('Товары для дома')}>Товары для дома</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('Одежда')}>Одежда</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('Автотовары')}>Автотовары</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('Техника')}>Техника</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('Зоотовары')}>Зоотовары</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('Товары для детей')}>Товары для детей</button>
          </div>
        </div>
        <div className="list mb-5">
          {/* {pages.length && <Pagination />} */}
          {Sfilter?.map((el) => (
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
    </div>
  );
}
export default BiddingList;
