import React from 'react';

class Story extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.storyTitle}</h2>
        <p>Story goes here...</p>
      </div>
    );
  }
}

export default Story;