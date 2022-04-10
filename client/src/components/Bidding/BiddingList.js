import React from 'react';
import { useSelector } from 'react-redux';
import BiddingCard from './BiddingCard';

function BiddingList() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getAllProductsFromDB());
  };
  console.log(products);
  return (
    <div className="col ">
      {/* {pages.length && <Pagination />} */}
      <div className="row">
        {products?.map((el) => (
          <BiddingCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
// export default BiddingList;
