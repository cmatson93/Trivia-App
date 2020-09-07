import React from "react";
import ErrorCard from "../components/ErrorCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export default function NoUrlMatch() {
  return (
    <Wrapper>
      <ErrorCard>404 - page not found</ErrorCard>
    </Wrapper>
  );
}
