import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';
import { addToDb } from '../../utils/fakeDB';

const JobDetails = () => {

    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(job => {
                const selectedJob = job.find(j => j.id.toString() === id);
                // console.log(selectedJob);
                setJobs([selectedJob]);
            })
    }, [id]);


    const handleApplyNow = id => {
        // console.log(id);
        addToDb(id);
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