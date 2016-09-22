import React  from 'react'
import Echarts  from './components/Echarts'
import {searchGit } from './Utils/helpers'
import './About.css'
class About extends React.Component {
  constructor(){
    super();
    this.state={
      data : {},
      wait : false,
      username:'liyuex'
    }
  }
  inputBlur(e){
    let username = e.target.value;
    if(username==''){
      username = 'liyuex'
    }
    searchGit(username).
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
    let styles={
      root:{
        backgroundColor:'teal',
      }

    }
    let bio = this.state.data.bio;
    let bios=[1,2];
    if(bio==null){
      bios[1]=null
    }else{
      bios= bio.split('：');
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
              <h3>姓名：<span>{this.state.wait ? 'loading' : this.state.data.name}</span></h3>
              <h3>英文：<span>{this.state.wait ? 'loading' : this.state.data.login}</span></h3>
              <h3>微信：<span>{this.state.wait ? 'loading' : bios[1]}</span></h3>
              <h3>邮箱：<span>{this.state.wait ? 'loading' : this.state.data.email}</span></h3>
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
        <Echarts style={{width:'90%',margin:'0 auto',height:'500px'}}/>
    </div>
    )
  }
}

export default About;
