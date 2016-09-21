import React  from 'react'
import { hashHistory } from 'react-router'
class Home extends React.Component {
  btnClick(){
    hashHistory.push('/about')
  }
  render () {
    let styles={
      content:{
        flexGrow:'1',
        alignItems:'center',
        paddingTop:'30vh'
      },
      h1:{
        color:'#fff',
        fontSize:'50px',
        fontFamily: '"microsoft yahei",arial,simsun',
        margin:'0',
        textAlign:'center'
      },
      p:{
        color:'#33b0d8',
        fontSize:'20px',
        textAlign:'center'
      },
      command:{
        textAlign:'center'
      },
      btn:{
        width:'80px',
        height:'30px',
        color:'#02306c',
        border:'none',
        backgroundColor:'#00BCD4',
        borderRadius:'8px'
      }
    }
    return(
      <div className='home-root'>
        <div style={styles.content}>
          <h1 style={styles.h1}>欢迎光临</h1>
          <p style={styles.p}>Here is Li Yuexi's Concer</p>
          <p style={styles.command}><button onClick={this.btnClick.bind(this)} style={styles.btn}>About Me</button></p>
        </div>
      </div>
    )
  }
}

export default Home;
