import React from 'react';
import Sound from './Sound';
import SoundControl from './SoundControl';
import TrackColor from './TrackColor'

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      note: null,
      playing: true,
      recording: false
    };
  }

  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }

  render() {
    return (
      <section className='all'>
        <article>
          <TrackColor onNoteChange={note => this.setState({ note })} />
          <Sound note={this.state.note} >
             <SoundControl volOn={ this.state.playing } />
          </Sound>
        </article>
        <article className='main'>
          <div className='logo'>
            <span className='s-logo logo-a'>S</span>
            <span className='s-logo logo-b'>S</span>
            <span className='s-logo logo-c'>S</span>
            <span className='s-logo logo-d'>S</span>
          </div>
        </article>
        <article className='directions'>
          <div className='direction'>
            <p className='note-name'>#A3</p>
            <div className='note-location'></div>
            <div className='line first'> </div>
            <div className='line second'> </div>
          </div>
          <div className='direction'>
          </div>
        </article>
      </section>
    );
  }
}
