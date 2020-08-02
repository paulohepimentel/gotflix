import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo_gotflix.png';
import Button from '../Button';
import { MenuBase, LogoBase } from './styles';
import './styles.css';

function Menu({ textButton, to}) {
  return (
    <MenuBase>
      <Link to="/">
        <LogoBase src={Logo} />
      </Link>
      <Button as={Link} to={to}>
        {textButton}
      </Button>
    </MenuBase>
  );
}

export default Menu;
