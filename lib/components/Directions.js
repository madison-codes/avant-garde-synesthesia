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

  render() {
    return(
      <article className='directions'>
      <Note noteName = { this.state.note } />
      </article>
    )
  }
}
