import styled, { css } from "styled-components";
import React from 'react';

export default function StyledComponent() {
    const Container = styled.div`
  display: flex;
`;
const Button = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;

    return (
        <Container>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
      </Container>
    )
}