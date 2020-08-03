import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;

  form{
    height: 100%;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
  }
`;

const FormTitle = styled.h1`
  margin: 20px auto;
  color: var(--white);
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

function Wrapper({ formTitle, children }) {
  return (
    <FormWrapper>
      <FormTitle>{formTitle}</FormTitle>
      {children}
    </FormWrapper>
  );
}

export default Wrapper;
