"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navber = () => {
    const pathname = usePathname();
    console.log(pathname,pathname.includes('dashboard'));
    if(pathname.includes('dashboard')){
        <></>
    } else{
       return (
        <div>
           
            <nav>
                <ul className='flex justify-around items-center bg-amber-400 '>
                    <Link href={'/home'}><li>Home</li></Link>
                    <Link href={'/about'}> <li>About</li></Link>
                    <Link href={'/education'}> <li>Education</li></Link>
                    <Link href={'/serviecs'}> <li>Services</li></Link>
                </ul>
            </nav>
        </div>
    );
    }
    
};

export default Navber;