import React from 'react';
import { RingLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <RingLoader color="#363cc4" />
        </div>
    );
};

export default Loading;