import React from 'react';

const User = (props) => {
  return (
  <div>
    <p>{props.name}@{props.screen_name}</p> 
  </div>
  )
}

export default User