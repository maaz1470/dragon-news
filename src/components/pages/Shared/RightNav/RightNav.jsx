import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from './../../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login with</h2>
            <Button variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-success mt-2"><FaGithub /> Login with Github</Button>
            <div>
                <h2 className='mt-4'>Find Us On</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;