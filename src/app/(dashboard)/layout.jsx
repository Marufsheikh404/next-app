import React from 'react';

const DashBoardLayout = () => {
    return (
        <div className='grid grid-cols-12'>
            {/* side ber */}
            <div className='col-span-3'>
                <ul>
                    <li>userdata</li>
                    <li>admindata</li>
                    <li>normal data</li>
                </ul>
            </div>
            {/* userdashBoard */}
            <div className='col-span-9'>
                
            </div>
        </div>
    );
};

export default DashBoardLayout;