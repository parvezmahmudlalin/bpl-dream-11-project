
import React from 'react';
import NavbarImg from '../../assets/logo.png'
import DollarImg from '../../assets/Currency.png'
const Navbar = () => {
  return (
    <div className="navbar  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a href="">Home</a></li>
      <li><a href="">Fixture</a></li>
      <li><a href="">Teams</a></li>
      <li><a href="">Schedules</a></li>
      </ul>
    </div>
   <img src= {NavbarImg} alt="" className='w-30%'/>
  </div>
  <div className="navbar-center md:flex hidden">
    <ul className="menu menu-horizontal px-1 gap-4">
      <li><a href="">Home</a></li>
      <li><a href="">Fixture</a></li>
      <li><a href="">Teams</a></li>
      <li><a href="">Schedules</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <div className='flex gap-4' >
      <button className='font-bold btn'>0 Coin</button>
      <img src={DollarImg} alt="" className='w-' />
    </div>
  </div>
</div>
  );
};

export default Navbar;