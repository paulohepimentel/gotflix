import React from 'react';
import styled from 'styled-components';
import Houses from './components/Houses';
import Logo from '../../assets/images/logo_alura.png';
import LogoGit from '../../assets/images/github.png';
import LogoIn from '../../assets/images/linkedin.png';

export const FooterBase = styled.footer`
  background: var(--dark);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 15px;
  color: var(--white);
  text-align: center;
  ul {
    align-items: center;
    justify-content: center;
    height: fit-content;
    padding: 0;
    margin: 0
  }
  li {
    display: inline-flex;
    list-style: none;
    padding: 0;
    margin: 10px;
  }

  a img:hover,
  a img:focus {
    background: #ffffff;
  }

  img{
    max-width: 25px;
    @media (max-width: 800px) {
      max-width: 20px;
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

function Footer() {
  return (
    <FooterBase>
      <Houses />
      <p>
        Created by
        {' '}
        <strong>PH</strong>
        {' '}
        during
        {' '}
        <strong>Alura</strong>
        {'\'s React JS Immersion'}
      </p>

      <ul>
        <li>
          <a href="https://github.com/paulohepimentel">
            <img src={LogoGit} alt="Logo GitHub" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/paulohepimentel/">
            <img src={LogoIn} alt="Logo LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://www.alura.com.br/">
            <img src={Logo} alt="Logo Alura" />
          </a>
        </li>
      </ul>
    </FooterBase>
  );
}

export default Footer;
