import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import StyledLink from './StyledLink';

const Navbar = () => {

    const NavContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: ${props => props.theme.colors.white};
    `;

    const LogoContainer = styled.h1`

    `;

    const NavItems = styled.div`
        display: flex;
        justify-content: space-around;
    `;

    return (
        <NavContainer>
            <LogoContainer>LOGO</LogoContainer>
            <NavItems>
                <StyledLink href='/create'>Create Game</StyledLink>
            </NavItems>
        </NavContainer>
    );
};




export default Navbar;