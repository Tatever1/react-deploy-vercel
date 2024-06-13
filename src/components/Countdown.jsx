import React from 'react'
import  {Timer}  from "./Timer";
import { forwardRef } from 'react';


 function Countdown({text}, ref) {
  return (
    <div  ref = {ref}  className=' countdown flex items-center justify-center flex-col py-12 '>
      <p className=' text-[2.5rem] leading-none tracking-tight text-green md:text-5xl lg:text-6xl'>{text}</p>
      <p  className='mt-12 w-[80%] max-w-4xl text-center mb-6 text-lg  text-gray lg:text-xl sm:px-16 xl:px-48 px-1' >Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր կյանքի կարևորագույն իրադարձությանը։</p>
           <Timer />
    </div>
  )
}

export default forwardRef(Countdown)