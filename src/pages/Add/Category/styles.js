import styled from 'styled-components';

const List = styled.ul`
  margin: 10px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-inline-start: 0px;
  li {
    margin: 2px;
    text-align: center;
  }
`;

export default List;
