import React from 'react';

const Post = async ({params}) => {
    const {id} = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return (
        <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
        </div>
    );
};

export default Post;