import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);

    useEffect(() =>{
      let interval;
      if(isStart)
      interval = setInterval(() =>{
        setTime((prevTime)=> prevTime + 1);
      }, 1000);

      else clearInterval(interval);

      return () => {
      clearInterval(interval);
    }
    }, [isStart]);

  const handleStartStop = () =>{
    setIsStart(!isStart);
  }
  const handleReset = () =>{
    setTime(0);
    setIsStart(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
  };



  return (
    <div className='container'>
      <h1>Stopwatch</h1>
      <div>Time: {formatTime(time)}</div>
      <br />
      <button onClick={handleStartStop} >{!isStart ?  "Start": "Stop"}</button>
      <button onClick={handleReset} >Reset</button>

    </div>
  );
}

export default App;

