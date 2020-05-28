import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'
import Tweet from './tweet'

const TweetList = () => {
  console.log(tweets)
  if (tweets) {
    return (
      tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet}/ >
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
