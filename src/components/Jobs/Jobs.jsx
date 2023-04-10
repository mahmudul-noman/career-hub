import React from 'react';
import Home from '../Home/Home';

const Jobs = () => {


    const { id } = useParams();

    const [job, setJob] = useState({});

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                const job = data.find((job) => job.id.toString() === id);
                setJob(job)
            })
    }, [id])

    return (
        <div>
            <h1>Jobs: </h1>
            {
                job.map(jb => <div jb={jb}>

                    <p>Name</p>

                </div>)
            }
        </div>
    );
};

export default Jobs;