import React, { useContext } from 'react';
import Logo from './../../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee'
import NavigationBar from '../NavigationBar/NavigationBar';
const Header = () => {

    return (
        <div>
            <Container className='mt-4'>
                <div className="text-center">
                    <img src={Logo} alt="" />
                    <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex'>
                    <Button variant='danger'>Latest</Button>
                    <Marquee className='text-danger' speed={100}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
                </div>
            </Container>
        </div>
    );
};

export default Header;