import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px;
`;
export default function PageWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
