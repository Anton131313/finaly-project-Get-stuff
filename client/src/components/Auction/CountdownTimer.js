import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import '../../App.css';

function ExpiredNotice() {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
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
      {days ? (
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
