import React from 'react';
const Posts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const datas = await res.json();
    return (
        <div>
            {
                datas.map(data => (
                    <p className='text-sm  text-red-400 border-amber-200 p-3 text-center' key={data.id}>{data.title}</p>
                ))
            }
        </div>
    );
};

export default Posts;