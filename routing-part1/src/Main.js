import React from 'react';
import Story from './Story.js';
import Forum from './Forum.js';
import {Link} from 'react-router-dom';

class Main extends React.Component {

  render() {
    let comp = '';
    if(this.props.toDisplay === "forum")
      comp = <Forum />;
    else if(this.props.toDisplay === "story")
      comp = <Story />;
    else  
      comp = '';


    return (
      <div>
        <Link to="/">Back</Link>
        {comp}
      </div>
    );
  }
}

export default Main;