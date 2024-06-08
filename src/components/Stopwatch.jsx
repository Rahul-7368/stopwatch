// src/components/Stopwatch.js

import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  const startStopwatch = () => {
    setRunning(true);
  };

  const stopStopwatch = () => {
    setRunning(false);
  };

  const resetStopwatch = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    // const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    // return `${formattedMinutes}:${formattedSeconds}`;
    return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`; 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: '48px', margin: '20px' }}>{formatTime(time)}</div>
      <div>
        {!running ? (
          <button onClick={startStopwatch}>Start</button>
        ) : (
          <button onClick={stopStopwatch}>Stop</button>
        )}
        <button onClick={resetStopwatch} >Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
