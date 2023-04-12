import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <>
            <div className="bg-gray">
                <div className="navbar cmn-width py-8">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <ActiveLink className='text-gray-500' to="/">Home</ActiveLink>
                                <ActiveLink className='text-gray-500' to="/statistics">Statistics</ActiveLink>
                                <ActiveLink className='text-gray-500' to="/appliedjobs">Applied Jobs</ActiveLink>
                                <ActiveLink className='text-gray-500' to="/blog">Blog</ActiveLink>
                            </ul>
                        </div>
                        <h2 className="logo font-bold lg:font-extrabold text-xl lg:text-3xl">Job<span className='text-yellow-600'>Station</span><sup className='text-sky-800 font-extrabold'>7</sup></h2>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <nav className='text-base font-bold my-nav'>
                                <ActiveLink className='text-gray-500' to="/">Home</ActiveLink>
                                <ActiveLink className='text-gray-500' to="/statistics">Statistics</ActiveLink>
                                <ActiveLink className='text-gray-500' to="/appliedjobs">Applied Jobs</ActiveLink>
                                <ActiveLink className='text-gray-500' to="/blog">Blog</ActiveLink>
                            </nav>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className='btn btn-primary cmn-btn-clr'>Start Applying</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;