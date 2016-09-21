import { Link } from 'react-router';
import React  from 'react';
class SideBar extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home'
    }
  }
  componentWillReceiveProps(){
    this.setState({
      title:
      this.context.router.isActive('/',true)?'Home':
      this.context.router.isActive('/about')?'About':
      this.context.router.isActive('/blogs')?'Blogs':'Works'
    })
  }
  componentWillMount(){
    this.setState({
      title:
      this.context.router.isActive('/',true)?'Home':
      this.context.router.isActive('/about')?'About':
      this.context.router.isActive('/blogs')?'Blogs':'Works'

    })
  }
  render () {
    return(
      <div className='content-sidebar'>
        <h2 className='corner'>Li Yuexi's@ <span>{this.state.title}</span></h2>
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

SideBar.contextTypes={
  router : React.PropTypes.object.isRequired
}
export default SideBar;
