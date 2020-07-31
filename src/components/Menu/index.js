import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo_gotflix.png';

import Button from '../Button';
import { MenuBase, LogoBase } from './styles';

import './styles.css';

function Menu() {
  return (
    <MenuBase>
      <Link to="/">
        <LogoBase src={Logo} />
      </Link>
      <Button as={Link} to="cadastro/video">
        New Video
      </Button>
    </MenuBase>
  );
}

export default Menu;
