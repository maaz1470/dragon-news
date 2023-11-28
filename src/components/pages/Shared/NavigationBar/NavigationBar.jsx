import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {

    const { user, userLogout } = useContext(AuthContext)

    const handleLogout = () => {
        userLogout()
            .then(() => {
                console.log('user logout successfully')
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg='light' data-bs-theme="light" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='nav-link' to={'/category/0'}>Home</Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && (
                                <>
                                    <Nav.Link href="#deets">{user.displayName}</Nav.Link>

                                </>
                            )
                        }
                        <div className='nav-link'>
                            {
                                user ? <Button variant='danger' onClick={handleLogout}>Logout</Button> : (
                                    <>
                                        <Link to={'/login'} variant="secondary" className='mx-2'>Login</Link>
                                        <Link to={'/register'} variant="secondary" className='mx-2'>Register</Link>
                                    </>
                                )
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;