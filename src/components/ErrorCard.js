import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 50vh;
  width: 50vw;
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export default function ErrorCard({ children }) {
  return <Card>{children}</Card>;
}
