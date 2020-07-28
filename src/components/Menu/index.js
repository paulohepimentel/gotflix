import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="phlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;