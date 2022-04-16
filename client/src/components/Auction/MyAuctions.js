import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyAuctionsfromDB } from '../../redux/thunks/productsThunk';
import BiddingCard from '../Bidding/BiddingCard';

function MyAuctions() {
  const myAuctions = useSelector((store) => store.myAuctions);
  // const user = useSelector((store) => store.user);
  // const [myProducts, setMyProducts] = useState([]);
  const dispatch = useDispatch();
  const userAuction = useSelector((store) => store.user);
  const [buttonState, setbuttonState] = useState(false);
  // useEffect(() => {
  //   setMyProducts(products.filter((el) => el.user_id === user.id));
  //   setbuttonState(true);
  // }, [products]);

  useEffect(() => {
    dispatch(getMyAuctionsfromDB(userAuction.id));
  }, []);
  return (
    <div className="container mt-3">
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <div><h3 className="text-left">Мои аукционы</h3></div>
          <div className="list mt-5 mb-5">
            {myAuctions?.map((el) => (
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
    </div>

  );
}

export default MyAuctions;
