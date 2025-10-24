import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-around items-center bg-amber-400 '>
                    <Link href={'/home'}><li>Home</li></Link>
                    <Link href={'/about'}> <li>About</li></Link>
                    <Link href={'/education'}> <li>Education</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;