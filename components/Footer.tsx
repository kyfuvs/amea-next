import React from 'react';
import { GoLink } from "react-icons/go";
import { SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <div className='flex justify-between px-20'>
      <div>
        Our Location
        <br />
        <br />
        2100 Stanley St, Montreal, QC H3A 1R6
        <br />
        <br />
        OR 
        <br />
        <br />
        1188 Sherbrooke O, Montreal, QC H3A 1H6 
      </div>

      <div>
        Cafe Hours
        <br />
        <br />
        No reservations 🌞
        <br />
        Mon - Fri : 8 - 4
        <br />
        Sunday Brunch : 10 - 3 🥞
      </div>

      <div >
        Contact US
        <br />
        <br />
        <div className='flex gap-3  '>
          <GoLink size={20}/>
          <a href="https://ameacafe.com/en/" target="_blank">www.ameacafe.com</a> 
        </div>

        <div className='flex gap-3 mt-3 '>
          <SlSocialInstagram size={20}/>
          <a href="https://www.instagram.com/ameacafe/?hl=en" target="_blank">Améa Café</a> 
        </div>
      </div>

    </div>
  )
}
