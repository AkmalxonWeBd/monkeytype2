import React, { useState } from 'react';

function MonkeytypeSimulator() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const words = ['Bu', 'bir', 'misol', 'matni.', 'React', 'bilan', 'yozilgan'];

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleStart = () => {
    setIsStarted(true);
    setStartTime(new Date());
  };

  const handleEnd = () => {
    setEndTime(new Date());
    setIsStarted(false);
  };

  const calculateWPM = () => {
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;
    const numberOfWords = text.trim().split(/\s+/).length;
    return Math.round((numberOfWords / elapsedTimeInSeconds) * 60);
  };

  return (
    <div>
      <h1>Monkeytype Ga O'xshash Yozuv Sinovchisi</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Matnni shu yerga yozing..."
        rows={5}
        cols={50}
        disabled={!isStarted}
      />
      {!isStarted && (
        <button onClick={handleStart}>Boshlash</button>
      )}
      {isStarted && (
        <button onClick={handleEnd}>Tugatish</button>
      )}
      {endTime && (
        <div>
          <p>Yozuv tezligi: {calculateWPM()} so'z/daqiqa</p>
        </div>
      )}
    </div>
  );
}

export default MonkeytypeSimulator;
