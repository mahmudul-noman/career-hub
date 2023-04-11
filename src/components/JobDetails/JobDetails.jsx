import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';
import { addToDb } from '../../utils/fakeDB';
import toast, { Toaster } from 'react-hot-toast';

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
        addToDb(id);
        toast.success(`You're Successfully Apply This Job!`);
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