import React from 'react';
import Home from './../../components/Home/Home';

class HomeScreen extends React.Component {

  static navigatorStyle = {
    navBarHidden: true, // make the nav bar hidden
  };

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

export default HomeScreen;