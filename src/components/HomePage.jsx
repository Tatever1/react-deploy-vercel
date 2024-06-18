import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {useRef} from 'react';
import  Countdown  from './Countdown';
import '../scss/HomePage.scss';
import { useEffect, useState } from 'react';


export  function HomePage() {
 
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
      };
  return ( <div className=' HomePage'>
              {/* <div>
          <h2>Window Size</h2>
          <p>Width: {windowSize.width}</p>
          <p>Height: {windowSize.height}</p>
          </div> */}


      <div className='w-full h-[100vh] bg-center bg-no-repeat bg-cover mx-auto opacity-90'
        style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/images/ourphoto2.jpg'}')`}} 
        >

            {/* <img src="images/ourphoto.jpg" alt="alt" className=' w-full h-[100vh] bg-center bg-no-repeat bg-cover mx-auto opacity-90 absolute' /> */}

          <div className=' flex justify-center items-center flex-col relative z-10 gap-6 top-2/3'>   
          <div className=' text-azure text-center text-xl sm:text-2xl md:text-3xl  lg:text-5xl '>Գրիգոր և Տաթև</div>  
          <p className=' text-center text-azure italic text-xs sm:text-sm md:text-sm lg:text-2xl   '>Հարսանյաց հրավեր</p>
          <div onClick={handleClick}>
            <img src="./images/dripping-down-arrow.gif" className="w-30 h-16 font-bold" alt="icon" decoding="async" loading="lazy"  />
          </div>     
          </div>
        </div>


            <Countdown ref = {ref} text = 'Հուլիս 28, 2024 '/>
      </div>
      )
}







// import React, {
//   useState,
//   useEffect
//   } from 'react';
  
//   export const HomePage = () => {
//   const [windowSize, setWindowSize] = useState({
//   width: window.innerWidth,
//   height: window.innerHeight
//   });
  
//   useEffect(() => {
//   const handleResize = () => {
//   setWindowSize({
//   width: window.innerWidth,
//   height: window.innerHeight
//   });
//   };
  
//   window.addEventListener('resize', handleResize);
  
//   return () => {
//   window.removeEventListener('resize', handleResize);
//   };
//   }, []);
  
//   return (
//   <div>
//   <h2>Window Size</h2>
//   <p>Width: {windowSize.width}</p>
//   <p>Height: {windowSize.height}</p>
//   </div>
//   );
//   }
  
