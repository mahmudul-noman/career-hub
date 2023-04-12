import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';
import { addToDb, getStoredCart } from '../../utils/fakeDB';
import toast from 'react-hot-toast';

const JobDetails = () => {

    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(job => {
                const selectedJob = job.find(j => j.id.toString() === id);
                setJobs([selectedJob]);
            })
    }, [id]);


    const handleApplyNow = id => {
        const sameJob = getStoredCart();
        const exist = sameJob[id];
        if (exist) {
            toast.error(`You've already applied for this job!`);
        } else {
            addToDb(id);
            toast.success(`You've successfully applied for this job!`);
        }
    }


    return (
        <div>
            {
                jobs.map(jb => <SingleJobDetails
                    key={jb.id}
                    jb={jb}
                    handleApplyNow={handleApplyNow}
                ></SingleJobDetails>)
            }
        </div>
    );
};

export default JobDetails;