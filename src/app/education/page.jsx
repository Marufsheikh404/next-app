"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
    const router = useRouter();
    const isLoggIn = false;
    const handleRouter = () => {
      if(isLoggIn){
          router.push('/education/skill');
      }else{
        router.push('/')
      }
    };

    return (
        <div>
            <h1>This is Education page</h1>
            <button
                onClick={handleRouter}
                className="btn bg-amber-400 px-3 py-1 rounded-md"
            >
                Skill Page
            </button>
        </div>
    );
};

export default Page;
