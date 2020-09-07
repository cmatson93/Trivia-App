import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.slate};
  font-size: ${props => props.theme.fontSizes.button};
  transition: 150ms ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.mint};
    font-size: ${props => props.theme.fontSizes.header};
  }
`;
export default function StyledLink({ children, primary, secondary, target }) {
  return <MyLink to={target}>{children}</MyLink>;
}
