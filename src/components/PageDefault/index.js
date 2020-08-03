import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
`;

function PageDefault({ children, textButton, to }) {
  return (
    <>
      <Menu textButton={textButton} to={to} />
      <Main id="menu">
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
