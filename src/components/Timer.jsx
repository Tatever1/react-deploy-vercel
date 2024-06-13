import React from 'react';
import { useState, useEffect } from 'react';
// import '../scss/Timer.scss'

export const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "July, 28, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer flex items-center mt-12 justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 flex-wrap text-lightgray">
      <div className=' box flex flex-col items-center justify-center space-y-4 flex-wrap text-2xl text-gray-600 w-24 h-24 lg:w-40 lg:h-40 italic rounded shadow-md'>
       <span className=' italic text-2xl lg:text-4xl'>
          <span className=' min-w-8'>{days}</span>
       </span>
        <span className=" text-lg lg:text-2xl">Օր</span>
      </div> 
      <div className=' box flex flex-col items-center justify-center space-y-4 flex-wrap text-2xl text-gray-600 w-24 h-24 lg:w-40 lg:h-40 italic rounded shadow-md '> 
      <span className=' italic text-2xl lg:text-4xl'>
          <span className=' min-w-8'>{hours}</span>
       </span>
        <span className=" text-lg lg:text-2xl">Ժամ</span></div>
      <div className=' box flex flex-col items-center justify-center space-y-4 flex-wrap text-2xl text-gray-600 w-24 h-24 lg:w-40 lg:h-40 italic rounded shadow-md '>
      <span className=' italic text-2xl lg:text-4xl'>
          <span className=' min-w-8'>{minutes}</span>
       </span>
        <span className=" text-lg lg:text-2xl">Րոպե</span></div>
      <div className=' box flex flex-col items-center justify-center space-y-4 flex-wrap text-2xl text-gray-600 w-24 h-24 lg:w-40 lg:h-40 italic rounded shadow-md'> 
       <span className=' italic text-2xl lg:text-4xl'>
          <span className=' min-w-8'>{seconds}</span>
       </span>
        <span className=" text-lg lg:text-2xl">Վայրկյան</span></div>
    </div>
  );
};


