import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
            "marks": 60
        },
        {
            "id": 3,
            "assignment_no": 'Assignment 3',
            "marks": 60
        },
        {
            "id": 4,
            "assignment_no": 'Assignment 4',
            "marks": 59
        },
        {
            "id": 5,
            "assignment_no": 'Assignment 5',
            "marks": 56
        },
        {
            "id": 6,
            "assignment_no": 'Assignment 6',
            "marks": 60
        },
        {
            "id": 7,
            "assignment_no": 'Assignment 7',
            "marks": 60
        },
        {
            "id": 8,
            "assignment_no": 'Assignment 8',
            "marks": 60
        }
    ];

    return (
        <div className='mt-14'>
            <h1 className='font-extrabold text-3xl text-sky-500'>Assignments Marks</h1>
            <h4 className='text-rose-400 font-bold'>Avg. Marks: 59.38</h4>
            <div className='mt-12 flex justify-center'>
                <AreaChart
                    width={1250}
                    height={500}
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
                    <YAxis dataKey="marks"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#000" fill="#38a169" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;