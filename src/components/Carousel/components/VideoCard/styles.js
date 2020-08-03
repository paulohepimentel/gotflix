import styled from 'styled-components';

const VideoCardContainer = styled.button`
  width: 290px;
  height: 153px;
  border: 1px solid;
  background-size: cover;
  background-position: center;
  background-image: ${({ url }) => `url(${url})`};
  opacity: 0.75;
  overflow: hidden;
  text-decoration: none;
  outline: 0;
  user-select: none;
  box-shadow: none;
  color: white;
  cursor: pointer;
  position: relative;
  display: flex;
  flex: 0 0 298px;
  align-items: flex-end;
  padding: 20px;
  transition: all 0.3s;
  &:hover,
  &:focus {
    outline: none;
    user-select: none;
    background-size: cover;
    border: 0px;
    opacity: 1;
    transform: scale(1.1);
    margin: 2px 2px;
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 800px) {
      & > span {
        display: none;
      }
    }
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  & > span {
    width: 100%;
    height: 50%;
    text-align: center;
    color: white;
    padding: 5px;
    font-weight: 500;
    display: none;
  }

  @media (max-width: 800px) {
    width: 150px;
    height: 85px;
  }
`;

export default VideoCardContainer;
