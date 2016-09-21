import React from 'react';
import { getWorks } from '../Utils/helpers';
import marked from 'marked';
import highlight from 'highlight.js';
marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }})
class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true,
    }
  }
  componentDidMount(){
    getWorks(this.props.params.title)
    .then((data) => {
      this.setState({data : data.worksData, wait : false})
    });
  }
  render () {
    let content = marked(this.state.data);
    return(
      <div className='work-txt'>
          {
            this.state.wait ?
            <h1 className='wait'>请稍等。。。</h1> :
            <div dangerouslySetInnerHTML={{__html:content}} className='post-content'/>
          }
      </div>
    )
  }
}

export default Work;
