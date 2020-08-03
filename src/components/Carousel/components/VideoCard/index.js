import React from 'react';
import PropTypes from 'prop-types';
import VideoCardContainer from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}
// href={videoURL}
function VideoCard({
  videoTitle, videoURL, categoryColor,
}) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  return (
    <VideoCardContainer
      url={image}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
    >
      <span style={{ background: categoryColor || 'white' }}>{videoTitle}</span>
    </VideoCardContainer>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
};

export default VideoCard;
