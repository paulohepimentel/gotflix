import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Container = styled.ul`
    padding: 0;
    margin: 0;
    
    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 40px;
        height: 40px;
        transform: initial;
        &:before {
            font-size: 30px;
        }
    }

    .slick-prev {
        left: 5px;
    }
    .slick-next {
        right: 5px;
    }
`;

export const SliderItem = styled.li`
    margin-right: 16px;
    img {
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {
        ...
        {
          dots: false,
          infinite: true,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
        }
      }
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
