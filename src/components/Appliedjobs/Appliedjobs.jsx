import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utils/fakeDB';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faListCheck } from '@fortawesome/free-solid-svg-icons'

const Appliedjobs = () => {

    // Fetch Data
    const [myJob, setMyJob] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setMyJob(data))
    }, [])

    // Applied Job
    const [foundMyJob, setFoundMyJob] = useState([]);
    useEffect(() => {
        const savedJob = getStoredCart();
        let newArr = [];
        for (const id in savedJob) {
            const foundJob = myJob.find(jobb => jobb.id.toString() === id);
            if (foundJob) {
                foundJob.quantity = savedJob[id];
                newArr.push(foundJob);
            }
        }
        setFoundMyJob(newArr);
    }, [myJob])


    // Job Filter 
    const [filter, setFilter] = useState('');
    const handleFilter = (types) => {
        setFilter(types);
    };

    const filteredJobs = filter
        ? foundMyJob.filter((job) => job.remote_or_onsite.toLowerCase() === filter)
        : foundMyJob;

    return (
        <>
            <h1 className='py-24 font-extrabold text-3xl bg-gray'><FontAwesomeIcon icon={faListCheck} /> &nbsp; Applied Jobs</h1>
            <div className="dropdown dropdown-bottom flex justify-end mt-20 mb-3 cmn-width">
                <label tabIndex={0} className="btn bg-gray-300 text-black hover:text-white border-0 m-1">
                    Filter By &nbsp;<FontAwesomeIcon icon={faAngleDown} /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-gray-200 rounded-box w-52">
                    <button className={`mb-2 btn btn-outline btn-info ${filter === 'remote' ? 'active' : ''}`} onClick={() => handleFilter('remote')} >Remote</button>

                    <button className={`btn btn-outline btn-accent ${filter === 'onsite' ? 'active' : ''}`} onClick={() => handleFilter('onsite')} >Onsite</button>
                </ul>
            </div>

            {/* Map Data */}
            <div className='cmn-width px-2 lg:px-0'>
                {
                    filteredJobs.map((job) => (
                        <AppliedJobDetails key={job.id} appliedJob={job} filter={filter} />
                    ))
                }
            </div>
        </>
    );
};

export default Appliedjobs;
