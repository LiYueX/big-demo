import React  from 'react';
import { hashHistory } from 'react-router';

class Cards extends React.Component {
  btnClick(){
    let url = this.props.url;
    hashHistory.push(`/work/${url}`)
  }
  render () {
    return(
      <div className="cardPic col-sm-6 col-md-6 col-lg-4">
        <div className="thumbnail">
          <img onClick={this.btnClick.bind(this)}  style={{cursor:'pointer'}} src={this.props.imgUrl} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <p><a className="btn btn-primary" role="button"
              onClick={this.btnClick.bind(this)}>查看详情</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
