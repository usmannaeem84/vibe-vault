import React from 'react';
import { assets } from '../assets/assets';
import NewsLetter from '../Components/NewsLetter';

const Contact = () => {
  return (
    <div className="flex flex-col  ">

<div className="flex flex-col gap-1 mb-8 items-center my-8">
        <div className="flex gap-2 items-center">
          <p className="text-2xl sm:text-3xl permanent font-medium text-yellow-500">CONTACT</p>
          <p className="text-2xl sm:text-3xl permanent font-medium">US</p>
          <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
        </div>
      </div>
<div  className='flex p-6 sm:flex-row flex-col '>

      <div className="md:w-1/2 flex justify-center items-center">
        <img src={assets.contact_img} alt="Contact" className="sm:w-[80%] w-full h-auto object-cover" />
      </div>
      <div className="md:w-1/2 sm:mt-0 mt-4 flex flex-col justify-center items-start text-gray-600">
      
        <div className="mb-6 my-3">
          <h3 className="text-xl font-semibold">Our Store</h3>
          <p className="text-lg">54709 Willms Station</p>
          <p className="text-lg">Suite 350, Washington, USA</p>
        </div>
        <div className="mb-6 my-3">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="text-lg">Tel: (415) 555-0132</p>
          <p className="text-lg">Email: admin@forever.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Careers at Forever</h3>
          <p className="text-lg">Learn more about our teams and job openings.</p>
          <button className="mt-5 px-6 py-5 bg-transparent transition-all border-gray-800 hover:bg-black hover:text-white  border ">Explore Jobs</button>
        </div>
      </div>
</div>

<NewsLetter></NewsLetter>
    </div>
  );
};

export default Contact;
