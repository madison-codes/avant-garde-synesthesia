import React from 'react';
import Sound from './Sound'


export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <section>
        <p>
          Click the buttons to play or pause the audio.
        </p>
        <Sound index={ 1 }/>
        <Sound index={ 2 }/>
        <Sound index={ 3 }/>
        <Sound index={ 4 }/>
        <Sound index={ 5 }/>
        <Sound index={ 6 }/>
        <Sound index={ 7 }/>
        <Sound index={ 8 }/>
        <Sound index={ 9 }/>
        <Sound index={ 10 }/>
        <Sound index={ 11 }/>
      </section>
    );
  }
}
