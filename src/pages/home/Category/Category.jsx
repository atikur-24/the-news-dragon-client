import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            <h5 className='fw-semibold mb-4'>Dragon News Home </h5>
            {
                categoryNews.map(category => <NewsCard key={category._id} news={category} />)
            }
        </div>
    );
};

export default Category;