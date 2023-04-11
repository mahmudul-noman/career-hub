import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <>
            <div className="header flex justify-between items-center">
                <h2 className="logo font-extrabold text-3xl">_Job<span className='text-yellow-600'>Station</span><sup className='text-sky-600 font-extrabold'>7</sup></h2>
                <nav className='text-base font-bold my-nav'>
                    <ActiveLink className='text-gray-500' to="/">Station</ActiveLink>
                    <ActiveLink className='text-gray-500' to="/statistics">Statistics</ActiveLink>
                    <ActiveLink className='text-gray-500' to="/appliedjobs">Applied Jobs</ActiveLink>
                    <ActiveLink className='text-gray-500' to="/blog">Blog</ActiveLink>
                </nav>
                <button className='btn btn-primary cmn-btn-clr'>Start Applying</button>
            </div>
        </>
    );
};

export default Header;