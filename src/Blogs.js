import React  from 'react'
import BlogCard  from './components/BlogCard'
import {getBlogs}  from './Utils/helpers'


class Blogs extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:false
    }
  }
  componentDidMount(){
    getBlogs().
    then((data) => {
      this.setState({data : data.cardsData , wait : false})
    });
  }
  render () {
    return(
      <div>
        {
          this.state.wait ?
          <h1 className='wait'>请稍等。。。</h1> :
          this.state.data.map( (item,i) => <BlogCard {...item} key={i} /> )
         }
      </div>
    )
  }
}

export default Blogs;
