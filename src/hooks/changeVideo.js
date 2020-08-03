import { useState } from 'react';

function changeVideo(defaultVideo) {
  const [video, setVideo] = useState(defaultVideo);

  function setHighVideo(value) {
    setVideo(value);
  }

  function handleChange(event) {
    setHighVideo(
      event.target.value,
    );
  }

  return {
    video,
    handleChange,
  };
}

export default changeVideo;
