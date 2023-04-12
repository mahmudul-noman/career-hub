import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCalendarDays, faPhone, faEnvelope, faLocationDot, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const SingleJobDetails = ({ jb, handleApplyNow }) => {
    const { job_description, job_responsibility, educational_requirements, experiences, phone, email, salary, job_title, location, company_logo } = jb;


    return (
        <div>
            <h1 className='bg-gray py-20 font-extrabold text-3xl'><FontAwesomeIcon icon={faCircleInfo} /> &nbsp; Job Details</h1>
            <div className="cmn-width px-2 lg:px-0 job-details-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                <div className="job-details-left text-start">
                    <img className='company-logo mb-5' src={company_logo} alt="" />
                    <h3 className='job-details-heading'>Job Description: <span className='job-details-span'>{job_description}</span></h3>
                    <h1 className='job-details-heading'>Job Responsibility: <span className='job-details-span'>{job_responsibility}</span></h1>
                    <h3 className='job-details-heading'>Educational Requirements: <br /> <span className='job-details-span'>{educational_requirements}</span></h3>
                    <h3 className='job-details-heading'>Experiences: <br /> <span className='job-details-span'>{experiences}</span></h3>
                </div>
                <div className="job-details-right text-start justify-self-center lg:justify-self-end ">
                    <div className="job-details bg-gray-300 p-10 shadow-sm rounded-md">
                        <h3 className='job-details-heading border-b-2 pb-4 border-gray-350'>Job Details</h3>
                        <h3 className='job-details-heading'><FontAwesomeIcon className='text-blue-500 mr-2' icon={faDollarSign} /> Salary: <span className='job-details-span'>{salary}</span></h3>
                        <h3 className='job-details-heading'><FontAwesomeIcon className='text-blue-500 mr-2' icon={faCalendarDays} /> Job Title: <span className='job-details-span'>{job_title}</span></h3>
                        <h3 className='job-details-heading border-b-2 pb-4 border-gray-350'>Contact Information</h3>
                        <h3 className='job-details-heading'><FontAwesomeIcon className='text-blue-500 mr-2' icon={faPhone} /> Phone: <span className='job-details-span'>{phone}</span></h3>
                        <h3 className='job-details-heading'><FontAwesomeIcon className='text-blue-500 mr-2' icon={faEnvelope} /> Email: <span className='job-details-span'>{email}</span></h3>
                        <h3 className='job-details-heading'><FontAwesomeIcon className='text-blue-500 mr-2' icon={faLocationDot} /> Address: <span className='job-details-span'>{location}</span></h3>
                    </div>
                    <button onClick={() => handleApplyNow(jb.id)} className='btn btn-primary w-full mt-5 cmn-btn-clr'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleJobDetails;