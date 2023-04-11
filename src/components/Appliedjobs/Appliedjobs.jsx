import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utils/fakeDB';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails';

const Appliedjobs = () => {

    const [myJob, setMyJob] = useState([]);
    const [foundMyJob, setFoundMyJob] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setMyJob(data))
    }, [])

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

    return (
        <div>
            {/* <h1>Applied jobs</h1> */}
            <div className="applied-container mt-24">
                <h1 className='my-20 font-extrabold text-3xl text-sky-600'>Applied Jobs</h1>
                {
                    foundMyJob.map(appliedJob => <AppliedJobDetails
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    ></AppliedJobDetails>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;