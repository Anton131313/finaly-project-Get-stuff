import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsFromDB } from '../../redux/thunks/productsThunk';
import BiddingCard from './BiddingCard';

function MyBiddings() {
  const products = useSelector((store) => store.products);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // const [myProducts, setMyProducts] = useState([]);
  // const [buttonState, setbuttonState] = useState(false);
  // useEffect(() => {
  //   setMyProducts(products.filter((el) => el.user_id === user.id));
  //   setbuttonState(true);
  // }, [products]);

  useEffect(() => {
    dispatch(getAllProductsFromDB());
  }, []);

  // console.log(user);
  return (
    <div className="container mt-3">
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <div><h3 className="text-left">Мои объявления</h3></div>
          <div className="list mt-5 mb-5">
            {products?.filter((el) => el.user_id === user.id).map((el) => (
              <BiddingCard
                key={el.id}
                id={el.id}
                img={el.img}
                title={el.title}
                info={el.info}
                condition={el['Condition.nameCondition']}
                category={el['Category.nameCategory']}
                location={el.location}
                buttonState
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default MyBiddings;
