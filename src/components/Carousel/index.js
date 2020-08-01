import React from 'react';
// import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({ ignoreFirstVideo, category}) {
  const categoryName = category.name;
  const categoryColor = category.color;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryName && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryName}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
