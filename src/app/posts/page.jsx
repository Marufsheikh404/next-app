import Link from 'next/link';
import React from 'react';
const Posts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const datas = await res.json();
    return (
        <div>
            <div className="p-6 space-y-3">
                {datas.map((data) => (
                    <div key={data.id} className="border p-3 rounded-md">
                        <p className="text-sm text-red-400 text-center">{data.title}</p>
                        <Link
                            href={`/posts/${data.id}`}
                            className="text-blue-500 hover:underline text-center block mt-2"
                        >
                            Details →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;