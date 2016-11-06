import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default ({ createdAt, user, content, reference, currentUser }) => {
  return (
    <audio
     src="../songs/To_Galaxy_Drums.mp3" controls autoPlay="true"
    ></audio>
  )
}
