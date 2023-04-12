import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

const Statistics = () => {
    const data = [
        {
            "id": 1,
            "assignment_no": 'Assignment 1',
            "marks": 60
        },
        {
            "id": 2,
            "assignment_no": 'Assignment 2',
            "marks": 30
        },
        {
            "id": 3,
            "assignment_no": 'Assignment 3',
            "marks": 40
        },
        {
            "id": 4,
            "assignment_no": 'Assignment 4',
            "marks": 20
        },
        {
            "id": 5,
            "assignment_no": 'Assignment 5',
            "marks": 35
        },
        {
            "id": 6,
            "assignment_no": 'Assignment 6',
            "marks": 30
        },
        {
            "id": 7,
            "assignment_no": 'Assignment 7',
            "marks": 50
        },
        {
            "id": 8,
            "assignment_no": 'Assignment 8',
            "marks": 20
        }
    ];

    return (
        <div>
            <h1 className='py-20 bg-gray font-extrabold text-3xl'><FontAwesomeIcon icon={faChartLine} /> &nbsp; Assignments Marks</h1>
            <div className='mt-12 flex justify-center'>
                <AreaChart width={1250} height={500}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assignment_no" />
                    <YAxis dataKey="marks" />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="orangered" fill="#6495ED" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;