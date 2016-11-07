import React from 'react';

export default ({ disabled, behavior, text, className }) => {
  return(
    <button
      onClick={() => behavior()}
      className={className}
      >{text}
    </button>
    )
}
