
import { useState, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    // Prevent multiple timers
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Stopwatch</h2>

      <h1>{seconds} seconds</h1>

      <button
        className="btn btn-success m-2"
        onClick={handleStart}
      >
        Start
      </button>

      <button
        className="btn btn-danger m-2"
        onClick={handleStop}
      >
        Stop
      </button>

      <button
        className="btn btn-primary m-2"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;