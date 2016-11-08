import React from 'react';

export default ({ noteName }) => {
  return(
    <div className='direction'>
      <div className={noteName}>ø {noteName}</div>
    </div>
  )
}
