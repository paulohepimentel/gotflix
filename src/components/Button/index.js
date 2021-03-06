import styled from 'styled-components';

const Button = styled.button`
    min-width: 180px;
    text-align: center;
    color: var(--dark);
    border: 0px solid var(--primary);
    background: var(--primary);
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

    @media (max-width: 800px) {
        height: 55px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        color: var(--white);
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
    }

    &:hover,
    &:focus {
        color: var(--white);
    }
`;

export default Button;
