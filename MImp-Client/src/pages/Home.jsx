import React from 'react'
import homeBg from '../assets/img/homebg.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
   return (
      <>
         <div className='home w-full h-[91vh] flex flex-col items-center justify-center z-12 bg-[url("../assets/img/homebg.jpg")] bg-slate-400'
            style={{ backgroundImage: `url(${homeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="h-[90%] md:h-[70vh] w-[97%] md:w-[70vw] flex flex-col items-center justify-center bg-slate-100/85 my-7">
               <div className="flex flex-col justify-center items-center gap-6">
                  <p className="text-[2rem] md:text-[3rem] text-red-500 font-bold text-center">Discover your Next Adventure with Us</p>
                  <p className="text-[2rem] md:text-[3rem] text-black font-bold text-center">Itineraries at your Fingertips</p>
                  <p className="text-[18px] text-[#42505f] text-center">Your personal trip planner and travel curator, creating itineraries tailored to your interest</p>
               </div>
               <div className="mt-4">
                  <button className="w-[7rem] h-[3rem] bg-black text-white rounded-md"><Link to={'/register'} >Get Started</Link></button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home