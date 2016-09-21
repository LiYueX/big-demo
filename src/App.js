import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

class App extends React.Component {
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

export default App;
