import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components';
import Background from '../../assets/images/background.png';

export const ErrorContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;

  padding:20px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ErrorContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;
  @media (max-width: 800px) {
    font-size: 25px;
    text-align: center;
  }
`;

export const ErrorBanner = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.75);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #000000 0%, transparent 100%);
  }
`;

function Pagina404() {
  return (
    <PageDefault to="/add/video" textButton="Add Video">
      <ErrorBanner backgroundImage={Background}>
        <ErrorContainer>
          <ErrorContainer.Title>
            This page does not exist
          </ErrorContainer.Title>
        </ErrorContainer>
      </ErrorBanner>
    </PageDefault>
  );
}

export default Pagina404;
