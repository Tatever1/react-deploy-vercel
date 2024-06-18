import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {useRef} from 'react';
import  Countdown  from './Countdown';
import '../scss/HomePage.scss';



export  function HomePage() {

 
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
      };
  return ( <div className=' HomePage'>
      <div className=' w-full h-[100vh] bg-center bg-no-repeat bg-cover bg-fixed mx-auto opacity-90 '
        style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/images/ourphoto.jpg'}')`}} 
        >
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






  
