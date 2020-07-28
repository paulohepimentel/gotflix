import React from 'react';
import Logo from '../../assets/images/logo.png';

import Button from '../Button';
import { MenuBase, LogoBase } from './styles';
import { Link } from 'react-router-dom';

import './styles.css';

function Menu() {
    return (
        <MenuBase>
            <Link to="/">
                <LogoBase src={Logo}/>
            </Link>
            <Button as={Link} to="cadastro/video">
                Novo Video
            </Button>
        </MenuBase>
    );
}

export default Menu;