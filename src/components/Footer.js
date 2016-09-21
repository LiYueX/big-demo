import { Link } from 'react-router';
import React  from 'react';
class Footer extends React.Component {
  render () {
    return(
      <div className='content-footer'>
        <ul className='footer-nav'>
          <li><Link  activeStyle={{backgroundColor:'#34dff5',  color: '#132527'}} to='/' onlyActiveOnIndex={true}><span className='	glyphicon glyphicon-home'></span><br/>Home</Link></li>
          <li><Link  activeStyle={{backgroundColor:'#34dff5',  color: '#132527'}} to='/blogs'><span className='	glyphicon glyphicon-leaf'></span><br/>Blogs</Link></li>
          <li><Link  activeStyle={{backgroundColor:'#34dff5',  color: '#132527'}} to='/works'><span className='glyphicon glyphicon-file'></span><br/>Works</Link></li>
          <li><Link  activeStyle={{backgroundColor:'#34dff5',  color: '#132527'}} to='/about'><span className='	glyphicon glyphicon-user'></span><br/>About</Link></li>
        </ul>
      </div>
    )
  }
}

export default Footer;
