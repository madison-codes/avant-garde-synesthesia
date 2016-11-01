import React from 'react';
import Sound from './Sound';
import TrackColor from './TrackColor'

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  pauseSound() {
    gain.gain.value = 0;
  }

  render() {
    return (
      <section>
        <p>
          Click the buttons to play or pause the audio.
        </p>
        {/* <div>
          <Sound index={ 6 } />
          <Sound index={ 2 } />
          <Sound index={ 3 } />
        </div>
        <div className='contain-sound'>
          <Sound index={ 4 } />
          <Sound index={ 5 } />
          <Sound index={ 6 } />
        </div>
        <div className='contain-sound'>
          <Sound index={ 7 } />
          <Sound index={ 8 } />
          <Sound index={ 9 } />
        </div> */}
        <TrackColor />
      </section>
    );
  }
}
