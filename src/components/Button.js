import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, secondary, primary }) => (
    <BaseButton
        secondary
    >
        {children}
    </BaseButton>
);   

const BaseButton = styled.button`
    height: 50px;
    border-radius: 4px;
    border: none;
    width: 100px;
    background: ${props => props.secondary ? props.theme.colors.white : props.theme.colors.mint};
    color: ${props => props.secondary ? props.theme.colors.slate : props.theme.colors};
    &:hover {
        background: ${props => props.secondary ? props.theme.colors.smoke : props.theme.colors.mintHover}
    }
`;


const Secondary = styled.button`
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.slate};
    /* &:hover {
        background: ${props => props.theme.colors.smoke};
    } */
`;

Button.PropTypes = {
    children: PropTypes.object, 
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    secondary: PropTypes.bool
};

export default Button;