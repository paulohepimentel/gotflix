import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/images/background.png';
import Logo from '../../assets/images/loading.png';

const LoadingPage = styled.section`
  height: 85vh;
  position: relative;
  color: #fff;
  background: black;
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

const ContentAreaContainer = styled.section`
  height: 80%;
  padding:50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    max-height: 60px;
    animation: rotate 3s linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

function Loading() {
  return (
    <LoadingPage backgroundImage={Background}>
      <ContentAreaContainer>
        <img src={Logo} alt="Loading..." />
      </ContentAreaContainer>
    </LoadingPage>
  );
}

export default Loading;
