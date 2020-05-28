import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'
import Tweet from './tweet'

const tweetsObjs = tweets.tweets;

const TweetList = () => {
  if (tweets) {
    return (
      tweets.tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <TweetList />
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
