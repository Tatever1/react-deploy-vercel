import React from 'react'
import { NavLink as Link } from "react-router-dom";

export function Schedule() {
  return (
    <div className=' w-full max-w-md md:max-w-screen-md mx-auto sm:my-10 relative'>
      <h2 className="text-center text-2xl sm:px-16 xl:px-48 px-1 tracking-wider italic ">Ժամանակացույց</h2>

      <div className=' w-full'>
        <div className=' relative mt-12'>
          <span className=' hidden md:block absolute left-1/2 ml-0 right-1/2 top-0 w-px h-full bg-gray '></span>
          <div className=' text-left md:text-center md:max-w-[80%] max-w-full mx-auto relative pb-20 overflow-hidden'>
            <span className=' hidden md:block absolute top-1 h-full ml-0 w-px'></span>
            <div className=' inline-block relative w-full align-middle text-center md:text-left'>
              <div className=' text-right px-14 md:px-10 float-left m-0 w-full md:w-1/2 box-border flex justify-center md:justify-end'>
                <img src="./images/zags-icon.webp" className="w-44 h-full" alt="icon" decoding="async" loading="lazy" />
              </div>

              <div class="text-center md:text-left px-8 md:px-10 float-left m-0 w-full md:w-1/2 box-border mt-4 md:mt-0">
                <span class="hidden md:block bg-white border-2 rounded-full h-4 absolute left-1/2 -ml-[0.50rem] top-0 w-4 box-content border-white"></span>
                <h3 class=" text-base font-normal break-words uppercase italic mb-6 ">Զագսի արարողություն</h3>
                <p class=" text-lg  text-gray">Ժամը 12:00 - ին</p>
                <p class="text-gray">Ծովածոց</p>
                <p class="text-gray">Չկալովկա Իսրայելյան փող. 21</p>
                <div className='  mt-4 text-md cursor-pointer font-light border-t-[1px] border-b-[1px] border-solid border-r-0  border-l-0 text-center text-[#D8A487] rounded-full  py-2 border-[#D8A487]'>
                  <Link to="https://www.google.com/maps/place/Hotel+and+Teahouse+Bashinjaghyan/@40.5090175,44.9702004,14.56z/data=!4m9!3m8!1s0x404040fbbba99009:0x7ddfbab65385af7c!5m2!4m1!1i2!8m2!3d40.511444!4d44.985902!16s%2Fg%2F11bbwnwcpn?hl=en-US&entry=ttu" > Դիտել քարտեզում </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="flex flex-row-reverse flex-wrap relative w-full align-middle text-center md:text-right pb-20">
        <span className=' hidden md:block absolute left-1/2 ml-0 right-1/2 top-0 w-px h-full bg-gray'></span>
        <div class="text-left px-14 md:px-10 float-left m-0 w-full md:w-1/2 box-border flex justify-center md:justify-start">
          <img src="./images/ring-icon.webp" className="w-44 h-full" alt="icon" decoding="async" loading="lazy" />
        </div>
        <div class="text-center md:text-right px-8 md:px-10 float-left m-0 w-full md:w-1/2 box-border mt-4 md:mt-0">
          <span class="hidden md:block bg-white border-2 rounded-full h-4 absolute left-1/2 -ml-[0.50rem] top-0 w-4 box-content border-white"></span>
          <h3 class=" text-base font-normal break-words uppercase italic mb-6">Պսակի արարողություն</h3>
          <p class=" text-lg text-gray">Ժամը 14:30 - ին</p><p class="text-gray">Հայրավանք եկեղեցի</p><p class="text-gray">Գեղարքունիք գ․ Հայրավանք</p>
          <div className=' mt-4  text-md cursor-pointer font-light border-t-[1px] border-b-[1px] border-solid border-r-0  border-l-0 text-center text-[#D8A487] rounded-full  py-2 border-[#D8A487] lg:w-[80%] lg:ml-16 md:ml-16 md:w-[80%] sm:align-middle sm:w-full '>
                  <Link to="https://www.google.com/maps/place/Hayravank+Monastery/@40.4327142,45.1055629,17z/data=!3m1!4b1!4m6!3m5!1s0x40406d545d002f2f:0x9ab481d4254f0fe!8m2!3d40.4327101!4d45.1081378!16s%2Fm%2F056gvsl?entry=ttu"> Դիտել քարտեզում </Link>
          </div>
        </div>
      </div>





      <div class="text-left max-w-full mx-auto relative pb-20 overflow-hidden">
        <span class="hidden md:block absolute top-1 h-full ml-0 w-px "></span>
        <span className=' hidden md:block absolute left-1/2 ml-0 right-1/2 top-0 w-px h-full bg-gray'></span>

        <div class="text-left md:text-center md:max-w-[80%] max-w-full mx-auto relative">
          <span class="hidden md:block absolute top-1 h-full ml-0 w-px"></span>
          <div class="inline-block relative w-full align-middle text-center md:text-left">
            <div class="text-right px-14 md:px-10 float-left m-0 w-full md:w-1/2 box-border flex justify-center md:justify-end">
              <img src="./images/champagne-icon.webp" class="w-44 h-full" alt="icon" decoding="async" loading="lazy" />
            </div>
            <div class="text-center md:text-left px-8 md:px-10 float-left m-0 w-full md:w-1/2 box-border mt-4 md:mt-0">
              <span class="hidden md:block bg-white border-2 rounded-full h-4 absolute left-1/2 -ml-[0.50rem] top-0 w-4 box-content border-white"></span>
              <h3 class=" text-base font-normal break-words uppercase italic mb-6">Հարսանյաց խնջույք</h3>

              <p class=" text-lg text-gray">Ժամը 17:00 - ին</p>
              <p class="text-gray">Սաֆարի Հոլլ</p>
              <p class="text-gray">ք․ Չարենցավան Կարեն Դեմիրճյան հրապարակ 3</p>

              <div className=' mt-4 text-md cursor-pointer font-light border-t-[1px] border-b-[1px] border-solid border-r-0  border-l-0 text-center text-[#D8A487] rounded-full  py-2 border-[#D8A487]'>
                  <Link to="https://www.google.com/maps/place/Safari+Hall/@40.4034429,44.6470537,19.25z/data=!4m6!3m5!1s0x404025013eb24ee3:0x29c15ce0b0679667!8m2!3d40.4034252!4d44.647551!16s%2Fg%2F11kj_lcg1c?entry=ttu"> Դիտել քարտեզում </Link>
                </div>
            </div>
          </div>
        </div>
      </div>




      <div class="text-right max-w-full mx-auto relative pb-20 overflow-hidden ">
        <span class="hidden md:block absolute top-1 h-full ml-0 w-px"></span>
        <span className=' hidden md:block absolute left-1/2 ml-0 right-1/2 top-0 w-px h-full bg-gray'></span>
        <div class="flex flex-row-reverse flex-wrap relative w-full align-middle text-center md:text-right">
          <div class="text-left px-14 md:px-10 float-left m-0 w-full md:w-1/2 box-border flex justify-center md:justify-start">
            <img src="./images/cake-icon.webp" class="w-44 h-full" alt="icon" decoding="async" loading="lazy" />
          </div>
          <div class="text-center  md:text-right px-8 md:px-10 float-left m-0 w-full md:w-1/2 box-border mt-4 md:mt-0">
            <span class="hidden md:block bg-white border-2 rounded-full h-4 absolute left-1/2 -ml-[0.50rem] top-0 w-4 box-content border-whhite"></span>
            <h3 class=" text-base font-normal break-words uppercase italic mb-6">Տորթի արարողություն</h3>
            <p class=" text-lg text-gray">Ժամը 22:00 - ին</p>
          </div>
        </div>
      </div>


    </div>
  )
}
