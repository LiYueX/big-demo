import React from 'react';
import { Link } from 'react-router';


class NavBar extends React.Component {
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
  backClick(){
    // 回退
    this.context.router.goBack();
  }
  render () {
    return(
      <div className='content-header'>
          <p className='back'>
            <span className='txt' onClick={this.backClick.bind(this)}><span className="glyphicon glyphicon-arrow-left"></span>Back</span>
          </p>
          <h2 className='corner'>Li Yuexi's@ <span>{this.state.title}</span></h2>
          <p className='setting'>
            <span className="glyphicon glyphicon-cog "></span>
          </p>
      </div>
    )
  }
}
NavBar.contextTypes={
  router : React.PropTypes.object.isRequired
}
export default NavBar;
