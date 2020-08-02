import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-content: center;
  justify-content: space-evenly;
`;

function RowFlex({ children }) {
  return (
    <Row>
      {children}
    </Row>
  );
}

export default RowFlex;
