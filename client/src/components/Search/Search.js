import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BiddingCard from '../Bidding/BiddingCard';
import { getAllProductsFromDB } from '../../redux/thunks/productsThunk';

function Search() {
  const search = useSelector((store) => store.search);

  const [buttonState, setbuttonState] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsFromDB());
    setbuttonState(false);
  }, []);

  return (
    <div className="d-flex list">

      { search.length ? search.map((el) => (
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
      )) : 'Такого товара нет'}

    </div>
  );
}

export default Search;
