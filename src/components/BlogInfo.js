import React, { PropTypes } from 'react'
import marked from 'marked';
import highlight from 'highlight.js';
import { getBlogInfos } from '../Utils/helpers';

marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }})

class BlogInfo extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true,
    }
  }
  componentDidMount(){
    getBlogInfos(this.props.params.url)
    .then((data) => {
      this.setState({data : data.infoData, wait : false})
    });
  }
  render () {
    let content = marked(this.state.data);
    return(
      <div>
        {
          this.state.wait ?
          <h1 className='wait'>请稍等。。。</h1> :
          <div dangerouslySetInnerHTML={{__html:content}} className='post-content'/>
        }
      </div>
    )
  }
}

export default BlogInfo;
