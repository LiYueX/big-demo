import { Link } from 'react-router';
import React  from 'react';
import arrow from '../images/back.png'
import arrow1 from '../images/back1.png'
class SideBar extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home'
    }
  }
  btnClick(){
    this.context.router.goBack();
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
    let backArrow={
      width: '50px',
      height: '40px',
      margin:'20px auto',
      cursor:'pointer'
    }
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
        <div style={backArrow} onClick={this.btnClick.bind(this)}>
          <img src={arrow} style={{width:'60%'}}/>
        </div>
      </div>
    )
  }
}

SideBar.contextTypes={
  router : React.PropTypes.object.isRequired
}
export default SideBar;
