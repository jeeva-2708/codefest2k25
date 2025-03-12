import React from 'react'
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/time.css'

const Time = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-27T23:59:59');

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    };

    // Update the countdown immediately upon component mount
    updateCountdown();

    // Set up the interval to update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <section className='time'>
            <div className='container text-center'>
              <h1>Act fast! Join us now!</h1>
              <div className='d-flex justify-content-center gap-5'>
                <div>
                  <div>
                   <p>{time.days}</p>
                  </div>
                  <p>Days</p>
                </div>
                <div>
                  <div>
                   <p>{time.hours}</p>
                  </div>
                  <p>Hour</p>
                </div>
                <div>
                  <div>
                   <p>{time.minutes}</p>
                  </div>
                  <p>Minutes</p>
                </div>
                <div>
                  <div>
                   <p>{time.seconds}</p>
                  </div>
                  <p>Seconds</p>
                </div>
              </div>
              <div>
                <a href=''>Register Now</a>
              </div>
            </div>

        </section>
    </div>
  )
}

export default Time