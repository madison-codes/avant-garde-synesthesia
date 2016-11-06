import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section>
        <h1>AUDIO</h1>
        <ReactAudioPlayer
          src="../songs/To_Galaxy_Drums.mp3"
          autoPlay
          loop
        />
      </section>
    )
  }
}
