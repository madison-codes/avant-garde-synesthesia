import React from 'react';

export default ({ noteName }) => {
  const note  = noteName.slice(0,-1);
  return(
    <div className='direction'>
      <div
        className={note} > ø {note}
      </div>
    </div>
  )
}
