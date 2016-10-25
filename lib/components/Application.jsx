import React from 'react';
import { map, extend, reverse } from 'lodash';
import firebase, { reference, signOut } from '../firebase';
import Sound from './Sound';

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
        <div onHover= { console.log('working'); }</div>
        {/* <Sound
          number = { 1 }
          value = { 440 }
        />
        <Sound
          number = { 2 }
          value = { 400 }
        /> */}
      </section>
    );
  }
}
