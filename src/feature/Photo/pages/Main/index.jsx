import React from 'react';
import Banner from '../../../../components/Banner';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos" backgroundUrl='https://picsum.photos/1900/800' />
            
            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
            </Container>
        </div>
    );
}

export default MainPage;