import React from 'react';
import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&rel=0&modestbranding=1&cc_load_policy=0&iv_load_policy=0&showinfo=0`}
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
