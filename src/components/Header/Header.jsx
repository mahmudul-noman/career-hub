import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header flex justify-between items-center">
                <h2 className="logo font-extrabold text-3xl">_Job<span className='text-yellow-600'>Station</span><sup className='text-sky-600 font-extrabold'>7</sup></h2>
                <nav className='text-base font-bold'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/appliedjobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
                <button className='btn btn-primary cmn-btn-clr'>Start Applying</button>
            </div>
        </>
    );
};

export default Header;