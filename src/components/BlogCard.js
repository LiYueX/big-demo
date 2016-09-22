import React, { PropTypes } from 'react';
import './BlogCard.css';
import {Link} from 'react-router';


class BlogCard extends React.Component {
  render () {
    let address=`/blog/${this.props.url}`;
    return(
      <div className='blogRoot'>
        <h1 className='blogIndex'><span>{this.props.index}</span></h1>
        <div className='blogMain'>
          <h4 className='blogTitle' ><span className='glyphicon glyphicon-leaf'></span>{this.props.title}</h4>
          <div className='blogContent'>{this.props.content}</div>
          <Link to={address} className='bolgMore' style={{textDecoration: 'none'}}>查看更多</Link>
        </div>
      </div>
    )
  }
}
BlogCard.defaultProps={
  index:1,
  title:' 这里是标题',
  content :'这里是内容'
}
export default BlogCard;
