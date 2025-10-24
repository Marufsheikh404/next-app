import React from 'react';

const page = ({params}) => {
    const id = params.id;
    return (
        <div>
            <p>ID:{id}</p>
        </div>
    );
};

export default page;