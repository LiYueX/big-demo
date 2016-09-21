import React  from 'react';
import Card  from './components/Card';
import { getCards }  from './Utils/helpers';

class Works extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:false
    }
  }
  componentDidMount(){
    getCards().
    then((data) => {
      this.setState({data : data.cardsData , wait : false})
    });
  }
  render () {
    return(
      <div className="row">
        {
          this.state.wait ?
           <h1 className='wait'>请稍等。。。</h1> :
           this.state.data.map( (item,i) => <Card {...item} key={i} /> )
         }
      </div>
    )
  }
}

export default Works;
