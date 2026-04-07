
import React from 'react';
import bgImg from '../../assets/bg-shadow.png';
import bannerLogo from '../../assets/banner-main.png'
const Hero = () => {
  return (
 <div className='rounded-md overflow-hidden'>
     <div
  className="hero min-h-[60vh] container mx-auto "
  style={{
    backgroundImage:`  linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4)),
        url(${bgImg})`,
    backgroundSize : "cover",
    backgroundPosition: "center"
  }}
>
  
  <div className="hero-content text-white text-center">
    <div className="max-w-md  ">
      <img src={bannerLogo} alt="" className='ml-20 mb-6 ' />
     <h1 className='mb-6 text-4xl font-bold  '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-6 text-amber-100">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="btn btn-primary ">Claim Free Credit</button>
    </div>
  </div>
</div>
 </div>
  );
};

export default Hero;