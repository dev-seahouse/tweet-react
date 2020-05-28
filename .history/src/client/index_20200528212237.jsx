import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'
import Tweet from './tweet'

const TweetList = () => {
  if (tweets) {
    return (
      
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Tweet tweets={tweets} />
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
