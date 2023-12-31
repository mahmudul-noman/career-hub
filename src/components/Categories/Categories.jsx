import React from 'react';
import './Categories.css';

const Categories = ({ category }) => {
    const { id, image, jobTitle, availableJob } = category;
    return (
        <div>
            <div className="bg-gray card text-start p-8 shadow-sm bg-black">
                <img className='ctg-img mb-8' src={image} alt="" />
                <h3 className='font-extrabold text-xl text-gray-700'>{jobTitle}</h3>
                <p className='text-gray-500 text-base mt-2'>{availableJob}</p>
            </div>
        </div>
    );
};

export default Categories;