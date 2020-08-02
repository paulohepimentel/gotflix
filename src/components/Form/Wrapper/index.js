import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 100%;
  height: 80vh;

  padding: 50px;
  padding-bottom: 0px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  
  background: var(--black);

  form{
    height: 100%;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const FormTitle = styled.h1`
  margin: 0px auto;
  color: var(--white);
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
