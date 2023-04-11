import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const AppliedJobDetails = ({ appliedJob, filter }) => {
    const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = appliedJob;

    if (filter && remote_or_onsite.toLowerCase() !== filter) {
        return null;
    }
    return (


        <>
            <div className="applied-container flex justify-between items-center gap-4 shadow-sm rounded-md border-2 border-gray-300 p-12 mb-6 m-auto">
                <div className="applied-company-img company-logo">
                    <img src={company_logo} alt="" />
                </div>
                <div className="applied-job-info text-start">
                    <h3 className='text-2xl font-extrabold text-gray-800'>{job_title}</h3>
                    <h4 className='font-semibold text-md text-gray-600 my-2'>{company_name}</h4>
                    <div className="job-type flex gap-4">
                        <button className='btn btn-outline btn-primary'>{remote_or_onsite}</button>
                        <button className='btn btn-outline btn-primary'>{fulltime_or_parttime}</button>
                    </div>
                    <div className="location-salary mt-4 flex gap-10 font-semibold text-xl text-gray-600">
                        <h4><FontAwesomeIcon className='me-2' icon={faLocationDot} /> {location}</h4>
                        <div className="salary flex items-center justify-center gap-2">
                            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                            <h4>Salary: {salary}</h4>
                        </div>
                    </div>
                </div>
                <div className="applied-job-details-btn text-start">
                    <Link to={`/jobDetails/${id}`}><button className='btn btn-primary cmn-btn-clr'>View Details</button></Link>
                </div>
            </div>
        </>
    );
};

export default AppliedJobDetails;