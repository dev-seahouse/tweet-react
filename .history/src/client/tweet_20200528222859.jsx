import React from 'react';
import User from './user';

const Tweet = (props) => {
  return (
    <div>
      <User name={props.tweet.user.name} screen_name = {props.tweet.user.screen_name} />
      <p>{props.tweet.text}</p>
    </div>
  )
}

export default Tweet