import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCountdown } from '../../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import '../../App.css';
import { getWinnerFromDB } from '../../redux/thunks/productsThunk';

function ExpiredNotice({ sellerId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log('aucccccccc', sellerId);
  const user = useSelector((store) => store.user);
  // console.log(808080, user);

  const winner = useSelector((store) => store.winner);
  // console.log(7777777777777, winner)
  // console.log(winner.name, 'rrrr');

  useEffect(() => {
    dispatch(getWinnerFromDB(id));
  }, []);

  return (
    <div className="expired-notice">
      <h3>
        победитель аукциона:
        <br />
        {
         (+user.id === +sellerId) ? (
           <>
             <span className="mx-3">
               <mark>{winner.name}</mark>
               <br />
               {' '}
             </span>
             <span className="mx-3">
               телефон:
               {' '}
               <mark>{winner.phone}</mark>
             </span>
           </>

         ) : winner && winner.name
        }
      </h3>
    </div>
  );
}

function ShowCounter({
  days, hours, minutes, seconds,
}) {
  return (
    <div className="show-counter">
      <a
        href="!#"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type="Days" isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type="Hours" isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type="Mins" isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type="Seconds" isDanger={false} />
      </a>
    </div>
  );
}

function CountdownTimer({ targetDate, sellerId }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice sellerId={sellerId} />;
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {days || hours || minutes || seconds ? (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )
        : (
          <ShowCounter
            days={0}
            hours={0}
            minutes={0}
            seconds={0}
          />
        )}
    </>
  );
}

export default CountdownTimer;
