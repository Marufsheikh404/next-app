import React from 'react';

const page = ({params}) => {
    const id = params.id;
    return (
        <div>
            <h1>page</h1>
            {id}
        </div>
    );
};

export default page;