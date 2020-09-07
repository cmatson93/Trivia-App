import React from "react";
import styled from "styled-components";

export default function Button({ children, primary, secondary, text }) {
  const StyledButton = styled.button`
    border-radius: 5px;
    font-size: ${props => props.theme.fontSizes.button};
  `;
  return <StyledButton>{children}</StyledButton>;
}
