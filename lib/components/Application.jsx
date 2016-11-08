import React from 'react';
import Sound from './Sound';
import TrackColor from './TrackColor'
import Video from './Video';
import Directions from './Directions'
// import Audio from './Audio';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      note: null
    };
  }

  render() {
    return (
      <section className='all'>
          {/* <Audio /> */}
        <article className='main'>
          <div className='logo'>
            <span className='s-logo logo-a'>S</span>
            <span className='s-logo logo-b'>S</span>
            <span className='s-logo logo-c'>S</span>
            <span className='s-logo logo-d'>S</span>
          </div>
          <Video />
          <TrackColor onNoteChange={note => this.setState({ note })} />
          <Sound note={this.state.note} />
        </article>
        <Directions note={this.state.note}/>
      </section>
    );
  }
}
