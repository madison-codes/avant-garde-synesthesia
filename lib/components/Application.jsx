import React from 'react';
import Sound from './Sound';
import TrackColor from './TrackColor'
import Video from './Video';
import Song from './Song'
import Logo from './Logo';
// import Audio from './Audio';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      note: null,
      song: []
    };
  }

  render() {
    return (
      <section className='all'>
          {/* <Audio /> */}
        <article className='main'>
          <Logo />
          <Video />
          <TrackColor onNoteChange={note => this.setState({ note })} />
          <Sound note={this.state.note} />
        </article>
        <Song
          note={this.state.note}
          song={this.state.song}
        />
      </section>
    );
  }
}
