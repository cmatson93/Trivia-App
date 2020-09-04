import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/images/logoMakr.png";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 60px;
  width: 60px;
  padding: 10px;
`;
export default function Logo() {
  return (
    <Link to='/'>
      <StyledLogo src={logo} alt='logo' />
    </Link>
  );
}
