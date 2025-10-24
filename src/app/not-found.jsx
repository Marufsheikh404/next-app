import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <h1 className='font-bold  text-6xl flex items-center justify-center'>Not Found Page</h1>
           <Link href={'/'}><button>click and go home</button></Link>
        </div>
    );
};

export default NotFoundPage;