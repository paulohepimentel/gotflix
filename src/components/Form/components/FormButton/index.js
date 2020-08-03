import styled from 'styled-components';

const FormButton = styled.button`
    margin-bottom: 10px;
    min-width: 180px;
    text-align: center;
    color: var(--dark);
    border: 0px solid var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        color: var(--white);
    }
`;

export default FormButton;
