import React from 'react';
import Button from './Button';

export default ({ behavior, text }) => {
  return(
    <Button
      behavior={() => behavior()}
      className={'play-button'}
      text={'PLAY/PAUSE'}
    />
  )
}
