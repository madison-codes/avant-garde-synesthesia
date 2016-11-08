import React from 'react';

import Note from './Note';
import notes from '../helpers/notes';


export default class Direction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note || 'Start Playing'
    };
  }

  componentWillUpdate(nextProps) {
    if (this.state.note) {
      if (this.state.note !== nextProps.note) {
        this.state.note = nextProps.note;
      }
    }
  }

  handleNoteName() {
    console.log(this.state.note.split(''));
  }

  render() {
    return(
      <article className='directions'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>

        <Note noteName = { this.state.note.slice(0, -1) } />
      </article>
    )
  }
}
