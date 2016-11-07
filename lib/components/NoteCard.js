import React from 'react';

export default ({ noteName }) => {
  return(
    <div className='direction'>
      <p classNsame='note-name'>{noteName}</p>
      <div className='note-location'></div>
      <div className='line first'></div>
      <div className='line second'></div>
    </div>
  )
}
