import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

let styles={
  palette: {
    primary1Color: '#0097A7',
  }
}
class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(styles)};
  }
  render () {
    return(
      <div className='content-wrap'>
        <SideBar />
        <NavBar />
        <div className='content-main'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
