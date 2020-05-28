import React from 'react';
import User from './user';

const Tweet = (props) => {
  return (
    <div>
      <p>{props.tweet.text}</p>
      <User />
    </div>
  )
}

export default Tweet