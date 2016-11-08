import React from 'react';
import Note from './Note';
import { map } from 'lodash';

export default class AllNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: this.props.song
    };
  }

  componentWillUpdate(nextProps) {
    if (this.state.song) {
      if (this.state.song !== nextProps.song) {
        this.state.song = nextProps.song;
      }
    }
  }

  render(){
    const displayNotes = map(this.state.song, (note) => <Note noteName={ note }  />)
    return(
      <div>
        {displayNotes}
      </div>
    )
  }
}
