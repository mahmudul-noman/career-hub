import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {

    const job = useParams();
    console.log(job);
    // const [job, setJob] = useState({});
    // useEffect(() => {
    //     fetch(`jobs.json${job.jobId}`)
    //     .then(res => res.json())
    //     .then(data=>console.log(data))
    // }, [])
    return (
        <div>

        </div>
    );
};

export default JobDetails;