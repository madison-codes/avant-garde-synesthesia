import React from 'react';

// import { map } from 'lodash';

import Note from './Note';
import AllNotes from './AllNotes'
import Styling from './Styling';
import notes from '../helpers/notes';


export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note || 'Get Jazzy2',
      song: this.props.song
    };
  }

  componentWillUpdate(nextProps) {
    if (this.state.note) {
      if (this.state.note !== nextProps.note) {
        this.state.note = nextProps.note;
        this.state.song.unshift(this.state.note);
      }
    }
  }

  render() {
    // const displayNotes = map(this.state.song, (note) => { return <Note {...note}/>})
    return(
      <article className='directions'>
        <Styling />
        {/* <Note noteName = { this.state.note.slice(0, -1) } /> */}
        <AllNotes song={this.state.song} />
      </article>
    )
  }
}
