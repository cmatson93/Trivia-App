import React from "react";
import styled from "styled-components";

export default function Button({ primary, secondary, text }) {
  const StyledButton = styled.button`
    border-radius: 2px;
    font-size: ${props => props.theme.fontSizes.button};
    background: ${primary};
    color: ${secondary};
    font-family: "GameFont";
    font-weight: 600;
    width: 100px;
    padding: 5px;
    margin: 40px -2px 0px -2px;
    border: none;
    -webkit-box-shadow: 4px 3px 5px 0px rgba(50, 50, 50, 0.4);
    -moz-box-shadow: 4px 3px 5px 0px rgba(50, 50, 50, 0.4);
    box-shadow: 4px 3px 5px 0px rgba(50, 50, 50, 0.4);
  `;
  return <StyledButton>{text}</StyledButton>;
}
