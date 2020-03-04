import React from "react";
import styled from "styled-components";

const Default: React.FC = props => (
  <LayoutWrapper>
    <div>{props.children}</div>
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  display: flex;
`;

export default Default;
