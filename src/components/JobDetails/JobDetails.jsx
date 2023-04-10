import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';

const JobDetails = () => {

    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(job => {
                const selectedJob = job.find(j => j.id.toString() === id);
                console.log(selectedJob);
                setJobs([selectedJob]);
            })
    }, [id]);
    

    return (
        <div>
            {
                jobs.map(jb => <SingleJobDetails
                    key={jb.id}
                    jb={jb}
                ></SingleJobDetails>)
            }
        </div>
    );
};

export default JobDetails;