import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class MaterialCard extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
  }
// 箭头函数不用去bind(this)
handleToggle (){
  this.setState({open: !this.state.open})
  }

handleClose (){
  this.setState({open: false})
}

  render () {
    return(
      <div>
        <CircularProgress size={1.5} />
        <RaisedButton  label="Home" />
        <RaisedButton
            label="Open Drawer"
            onTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}
export default MaterialCard;
