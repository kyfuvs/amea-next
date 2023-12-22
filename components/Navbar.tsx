import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {
  return (
    <div>
        <div className='flex justify-between items-center px-20 py-4 '>
        <div>
            <IoIosSearch size={30}/>
        </div>

        <div>
            <Image
            src="/amea-logo.png"
            width={150}
            height={100}
            alt="amea-logo"
            />
        </div>

        <div className='flex gap-5 '>
                <IoPersonOutline size={30}/>
                <IoBagHandleOutline size ={30}/>
        </div>
        </div>

        <div className='flex justify-center gap-6 '>
            <Link className='hover:underline' href={'/pizza'}>PIZZA</Link>
            <Link className='hover:underline' href={'/pastries'}>PASTRIES</Link>
            <Link className='hover:underline' href={'/coffee'}>AMEA'S COFFEE </Link>
            <Link className='hover:underline' href={'/lunch'}>LUNCH MENU</Link>
            <Link className='hover:underline' href={'/salad'}>SALAD</Link>
            <Link className='hover:underline' href={'/soup'}>SOUP</Link>

        </div>
    </div>
  )
}
