import React, { useEffect, useState } from 'react';
import './Home.css';
import { useLoaderData, useParams } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    const categories = useLoaderData();

    // Featured Jobs Area: useEffect
    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])


    // Show All Button
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(true);
    }


    return (
        <>
            {/* Banner Area */}
            <div className="banner mt-10 mt-24 grid grid-cols-2 items-center justify-between">
                <div className="banner-text text-start col-span-1">
                    <h2 className='text-7xl font-extrabold leading-7r'>One Step <br /> Closer To Your <br /> <span className='cmn-text-clr'>Dream Job</span></h2>
                    <p className='mt-10 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-primary cmn-btn-clr mt-10'>Get Started</button>
                </div>
                <div className="banner-img col-span-1 flex justify-self-end">
                    <img src="man.png" alt="" />
                </div>
            </div>


            {/* Categories Area */}
            <div className='categories-container mt-24'>
                <h1 className='font-extrabold text-5xl text-gray-900 m-4'>Job Category List</h1>
                <p className='text-base font-bold text-gray-500 m-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="categories grid grid-cols-4 gap-5">
                    {
                        categories.map(category => <Categories
                            key={category.id}
                            category={category}
                        ></Categories>)
                    }
                </div>
            </div>


            {/* Featured Jobs Area */}
            <div className="featured-container  mt-24 ">
                <h1 className='font-extrabold text-5xl text-gray-900 m-4'>Featured Jobs</h1>
                <p className='text-base font-bold text-gray-500 m-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="featured-job grid grid-cols-2 gap-5">
                    {
                        job.slice(0, showAll ? 6 : 4).map(myjob => <Jobs
                            myjob={myjob}
                            key={myjob.id}
                        ></Jobs>)
                    }
                </div>

                {!showAll && (
                    <div className="show-all-btn my-5">
                        <button onClick={() => handleShowAll()} className='btn btn-danger'>Show All</button>
                    </div>
                )
                }
            </div>
        </>
    );
};

export default Home;