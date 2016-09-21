import { Link } from 'react-router';
import React  from 'react';
class SideBar extends React.Component {
  render () {
    return(
      <div className='content-sidebar'>
        <h2 className='corner'>Li Yuexi's Corner</h2>
        <ul className='sidebar-nav'>
          <li>
            <Link to='/'  activeStyle={{backgroundColor:'#34dff5',  color: '#132527'}} onlyActiveOnIndex={true}><span className='	glyphicon glyphicon-home'></span>Home
          </Link>
          </li>
          <li>
            <Link to='/blogs' activeStyle={{backgroundColor:'#34dff5',  color: '#132527'}}>
              <span className='	glyphicon glyphicon-leaf'></span>Blogs
            </Link>
          </li>
          <li>
            <Link to='/works' activeStyle={{backgroundColor:'#34dff5',  color: '#132527'}}>
              <span className='glyphicon glyphicon-file'></span>Works<
              /Link>
          </li>
          <li>
            <Link to='/about' activeStyle={{backgroundColor:'#34dff5',  color: '#132527'}}>
              <span className='	glyphicon glyphicon-user'></span>About
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SideBar;
