import React from 'react';
import './Jobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';


const Jobs = ({ myjob }) => {
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary, } = myjob;

    return (
        <div className="job-card card shadow-xl text-start border-2 border-gray-200 p-10">
            <img className='company-logo mb-8' src={company_logo} alt="" />
            <h3 className='text-2xl font-extrabold text-gray-800'>{job_title}</h3>
            <h4 className='font-semibold text-md text-gray-600 my-2'>{company_name}</h4>
            <div className="job-type flex gap-4">
                <button className='btn btn-outline btn-primary'>{remote_or_onsite}</button>
                <button className='btn btn-outline btn-primary'>{fulltime_or_parttime}</button>
            </div>
            <div className="location-salary mt-4 block lg:flex gap-0 lg:gap-10 font-semibold text-base lg:text-xl text-gray-600">
                <h4><FontAwesomeIcon className='me-2' icon={faLocationDot} /> {location}</h4>
                <div className="salary flex items-center justify-center gap-2 pt-2 lg:pt-0">
                    <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                    <h4>Salary: {salary}</h4>
                </div>
            </div>
            <div className="detail-btn mt-5">
                <Link to={`/jobDetails/${myjob.id}`}><button className='btn btn-primary cmn-btn-clr'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Jobs;

