import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BiddingCard from './BiddingCard';

function MyBiddings() {
  const products = useSelector((store) => store.products);
  const user = useSelector((store) => store.user);
  const [myProducts, setMyProducts] = useState([]);
  const [buttonState, setbuttonState] = useState(false);
  useEffect(() => {
    setMyProducts(products.filter((el) => el.user_id === user.id));
    setbuttonState(true);
  }, [products]);
  // console.log(user);
  return (
    <div className="container">
      <div><h3>Мои объявления</h3></div>
      {/* {pages.length && <Pagination />} */}
      <div className="list mt-5 mb-5">
        {myProducts?.map((el) => (
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

export default MyBiddings;
