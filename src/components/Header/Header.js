import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className='row' bg="dark" variant="dark">
            <Container className='text-white pt-1' aria-label='Mark.bit' aria-required="true">
                <h6>&#60;Mark.bit&#62;</h6>
            </Container>
        </Navbar>
    )
}

export default Header
