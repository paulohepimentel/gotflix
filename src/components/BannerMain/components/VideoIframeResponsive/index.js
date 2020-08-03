/* eslint-disable react/prop-types */
import React from 'react';
// import ReactPlayer from 'react-player';

import { VideoContainer, ResponsiveIframe } from './styles';

/*
<ReactPlayer
        url="https://www.youtube.com/embed/${youtubeID}"
      />
*/
function YouTubeIframeResponsive({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
