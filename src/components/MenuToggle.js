import React from 'react'

export const MenuToggle = (props) => {

  return (
    <button
      className={'menuToggle ' + (props.open ? 'open' : '')}
      onClick={props.toggleClick}
      title={(props.open ? 'Close Menu' : 'Open Menu')}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )

}
