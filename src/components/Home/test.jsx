import React from 'react';

const test = () => {
    return (
        <div className="banner mt-10 mt-24 grid grid-cols-3 place-content-center gap-20">
            <div className="banner-text text-start col-span-2">
                <h2 className='text-7xl font-extrabold leading-7r'>One Step <br /> Closer To Your <br /> <span className='text-sky-700'>Dream Job</span></h2>
                <p className='mt-10 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary start-apply-btn mt-10'>Get Started</button>
            </div>
            <div className="banner-img">
                <img src="man.png" alt="" />
            </div>
        </div>
    );
};

export default test;