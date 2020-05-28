import React from 'react';
import User from './user';

const Tweet = (props) => {
  return (
    <div>
      <User name={props.user.name} screen_name = {props.user.screen_name}
    </div>
  )
}

export default Tweet