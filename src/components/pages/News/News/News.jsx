import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditorInsights from '../EditorInsights/EditorInsights';

const News = () => {
    const news = useLoaderData();
    const {title, details, _id, image_url, author, category_id} = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All News in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights />
        </div>
    );
};

export default News;