import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  padding: 16px;
  min-width: 170px;
  text-align: center;
  
  @media (max-width: 800px) {
    font-size: 15px;
    min-width: 100px;
    justify-content: center;
  }
`;

function Label({ text, color }) {
  return (
    <LabelWrapper style={{ background: color }}>
      {text}
    </LabelWrapper>
  );
}

export default Label;
