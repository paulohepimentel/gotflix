import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 1;
  margin-top: 15px;
  margin-bottom: 5px;
  display: inline-block;
  padding: 10px 20px;
  background: red;
  line-height: 1;

  @media (max-width: 800px) {
    font-size: 20px;
    padding: 5px 10px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 6%;
  margin-right: 5%;
  margin-bottom: 16px;
  @media (max-width: 800px) {
    min-height: 100px;
    margin-bottom: 10px;
  }
`;
