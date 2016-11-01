import React from 'react';
import Sound from './Sound';
import TrackColor from './TrackColor'

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      note: null
    };
  }

  // pauseSound() {
  //   gain.gain.value = 0;
  // }

  render() {
    return (
      <section>
        <TrackColor onNoteChange={note => this.setState({ note })} />
        <Sound note={this.state.note} />
      </section>
    );
  }
}
