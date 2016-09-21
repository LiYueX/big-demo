import React  from 'react'

import {searchGit } from './Utils/helpers'
import './About.css'
class About extends React.Component {
//   avatar_url
// :
// "https://avatars.githubusercontent.com/u/20787370?v=3"
// bio
// :
// "微信：18330116404"
// blog
// :
// "liyuex.github.io"
// company
// :
// null
// created_at
// :
// "2016-08-02T05:31:24Z"
// email
// :
// "1193979065@qq.com"
// events_url
// :
// "https://api.github.com/users/LiYueX/events{/privacy}"
// followers
// :
// 8
// followers_url
// :
// "https://api.github.com/users/LiYueX/followers"
// following
// :
// 19
// following_url
// :
// "https://api.github.com/users/LiYueX/following{/other_user}"
// gists_url
// :
// "https://api.github.com/users/LiYueX/gists{/gist_id}"
// gravatar_id
// :
// ""
// hireable
// :
// null
// html_url
// :
// "https://github.com/LiYueX"
// id
// :
// 20787370
// location
// :
// "中国"
// login
// :
// "LiYueX"
// name
// :
// "李月喜"
// organizations_url
// :
// "https://api.github.com/users/LiYueX/orgs"
// public_gists
// :
// 0
// public_repos
// :
// 12
// received_events_url
// :
// "https://api.github.com/users/LiYueX/received_events"
// repos_url
// :
// "https://api.github.com/users/LiYueX/repos"
// site_admin
// :
// false
// starred_url
// :
// "https://api.github.com/users/LiYueX/starred{/owner}{/repo}"
// subscriptions_url
// :
// "https://api.github.com/users/LiYueX/subscriptions"
// type
// :
// "User"
// updated_at
// :
// "2016-09-20T01:09:55Z"
// url
// :
// "https://api.github.com/users/LiYueX"
  constructor(){
    super();
    this.state={
      data : {},
      wait : false,
      username:'liyuex'
    }
  }
  inputBlur(e){
    console.log(e.target.value);
    // this.setState({username : e.target.value})
    searchGit(e.target.value).
    then((data) => {
      this.setState({data : data.getGit , wait : false})
    });
  }
  componentDidMount(){
    searchGit(this.state.username).
    then((data) => {
      this.setState({data : data.getGit , wait : false})
    });
  }
  render () {
    console.log(this.state.data);
    let styles={
      root:{
        backgroundColor:'teal',
      }

    }
    return(
      <div >
        <div className='avatar-container'>
          <img className="avatar" src={this.state.data.avatar_url}/>
          <input className='search' defaultValue='' onBlur={this.inputBlur.bind(this)} type='text' placeholder='输入您要查询的用户名 ' />
        </div>
        <div className='about-cont'>
          <div className='about-cont-txt'>
            <h2>个人简介：</h2>
            <div className='person'>
              <h3>姓名：<span>{this.state.data.name}</span></h3>
              <h3>英文：<span>{this.state.data.login}</span></h3>
              <h3><span>{this.state.data.bio}</span></h3>
              <h3>邮箱：<span>{this.state.data.email}</span></h3>
              <h3>个人网站：<span>{this.state.data.blog}</span></h3>
            </div>
          </div>
          <div className='about-cont-txt'>
            <h2>个性名片：</h2>
            <div className='cards'>
              <span className='btn btn-success btn1'>电影</span>
              <span className='btn btn-primary btn2'>音乐</span>
              <span className='btn btn-warning btn3'>手机控</span>
              <span className='btn btn-info btn4'>篮球</span>
              <span className='btn btn-danger btn5'>爱狗</span>
              <span className='btn btn-primary btn6'>潜力股</span>
              <span className='btn btn-warning btn7'>低调</span>
              <span className='btn btn-info btn8'>桌游</span>
              <span className='btn btn-success btn9'>文艺青年</span>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default About;
