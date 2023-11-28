import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { title, image_url, details, _id, author } = news;
    return (
        <div className='my-4'>
            <Card className="">
                <Card.Header className='d-flex'>
                    <Image src={author?.img} style={{
                        height: '40px'
                    }} roundedCircle />
                    <div className='ps-2'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : 
                            <>{details.slice(0,250)}...<Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;