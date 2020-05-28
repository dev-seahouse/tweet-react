import React from 'react';
import User from './user';

const Tweet = (props) => {
  return (
    <div>
      <p>{props.tweet.text}</p>
    </div>
  )
}

export default Tweet