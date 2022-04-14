import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCountdown } from '../../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import '../../App.css';
import { getWinnerFromDB } from '../../redux/thunks/productsThunk';

function ExpiredNotice() {
  const { id } = useParams();
  console.log(id, '-----');
  const dispatch = useDispatch();

  const winner = useSelector((store) => store.winner);

  useEffect(() => {
    dispatch(getWinnerFromDB(id));
  }, []);

  return (
    <div className="expired-notice">
      <span>
        {winner.name ? winner.name : (<div>Нет победителя</div>)}
        !!!
      </span>
      <p>На вашу почту выслана информация о дальнейших действиях</p>
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

function CountdownTimer({ targetDate }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
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
