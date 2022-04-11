import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BiddingCard from './BiddingCard';

function MyBiddings() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsFromDB());
  }, []);

  return (
    <div className="container">
      {/* {pages.length && <Pagination />} */}
      <div className="list mt-5">
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
          />
        ))}
      </div>
    </div>
  );
}

export default MyBiddings;
