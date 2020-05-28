import React from 'react';
import User from './user';

const Tweet = (props) => {
  return (
    <div>
      <p>{props.tweet.text}</p>
      <User name={props.tweet.user.name} screen_name={props.tweet.user.screen_name}/>
    </div>
  )
}

export default Tweet