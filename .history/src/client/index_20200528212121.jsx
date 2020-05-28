import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'
import Tweet from './tweet'

class App extends React.Component {

  const tweets = 

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
