import React from 'react';
import styled from 'styled-components';

import Arryn from '../../../assets/images/logo_houses/arryn.png';
import Baratheon from '../../../assets/images/logo_houses/baratheon.png';
import Greyjoy from '../../../assets/images/logo_houses/greyjoy.png';
import Lannister from '../../../assets/images/logo_houses/lannister.png';
import Martell from '../../../assets/images/logo_houses/martell.png';
import Stark from '../../../assets/images/logo_houses/stark.png';
import Targaryen from '../../../assets/images/logo_houses/targaryen.png';
import Tully from '../../../assets/images/logo_houses/tully.png';
import Tyrell from '../../../assets/images/logo_houses/tyrell.png';

export const HousesLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
  
  @media (max-width: 800px) {
    img {
      max-width: 5px;
    }
  }
`;

function Houses() {
  return (
    <HousesLogo>
      <img src={Stark} alt="Logo Stark" />
      <img src={Lannister} alt="Logo Lannister" />
      <img src={Baratheon} alt="Logo Baratheon" />
      <img src={Targaryen} alt="Logo Targaryen" />
      <img src={Tyrell} alt="Logo Tyrell" />
      <img src={Tully} alt="Logo Tully" />
      <img src={Arryn} alt="Logo Arryn" />
      <img src={Martell} alt="Logo Martell" />
      <img src={Greyjoy} alt="Logo Greyjoy" />
    </HousesLogo>
  );
}

export default Houses;
