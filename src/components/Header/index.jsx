import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Row,
    Container,
    Navbar,
    NavbarBrand
  } from 'reactstrap';
import './Header.scss';

function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between"> 
                    <Navbar color="light" light expand="md">
                        <NavbarBrand 
                            className="header__brand"
                            href="/"
                        >
                            KANGCODE
                        </NavbarBrand>
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Main App 
                        </NavLink>
                    </Navbar>
                </Row>
            </Container>
        </header>
    );
}

export default Header;