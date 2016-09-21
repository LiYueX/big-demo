import React from 'react';
import { Link } from 'react-router';


class NavBar extends React.Component {
  render () {
    return(
      <div className='content-header'>
          <p className='back'>
            <span className='txt'><span className="glyphicon glyphicon-arrow-left"></span>Back</span>
          </p>
          <h2 className='corner'>Li Yuexi's Corner</h2>
          <p className='setting'>
            <span className="glyphicon glyphicon-cog "></span>
          </p>
      </div>
    )
  }
}

export default NavBar;
