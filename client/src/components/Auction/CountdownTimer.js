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
        href="https://tapasadhikary.com"
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
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}

export default CountdownTimer;
