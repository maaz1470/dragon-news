import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header />
                <Container>
                    <Row>
                        <Col lg={3}>
                            <LeftNav />
                        </Col>
                        <Col lg={9}>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            <Footer />
        </div>
    );
};

export default NewsLayout;