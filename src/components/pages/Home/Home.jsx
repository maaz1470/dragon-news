import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';
import NewsCart from './NewsCart/NewsCart';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            {
                data.map(news => <NewsCart key={news._id} news={news} />)
            }
        </div>
    );
};

export default Home;