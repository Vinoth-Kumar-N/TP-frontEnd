import React from 'react';
import { User2 } from 'lucide-react';

const Featurescard = () => {
  return (
    <div className='w-[300px] h-[500px]  rounded-xl bg-[#f8f8f8] text-black'>
      <div className='relative'>
        <div className='w-full h-[45%]'>
          <img 
            src="https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg" 
            className='w-full h-full rounded-lg object-cover' 
            alt="background" 
          />
        </div>

        <div className='w-full h-full flex flex-col p-4'>
          <div className='mb-4'>
            <p className='text-2xl font-semibold'>Consequat</p>
            <p className='text-gray-400 font-normal'>16 January 2024</p>
            <p className='font-normal mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias distinctio et vel quas quibusdam exercitationem commodi, aliquam rep.
            </p>
          </div>

          <div className='mt-auto bg-black rounded-b-xl'>
            <div className='h-full w-full flex items-center p-3 space-x-3'>
              <User2 color='orange' size={35} className='rounded-full border border-black' />
              <p className='text-white font-semibold'>Abishek</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurescard;
