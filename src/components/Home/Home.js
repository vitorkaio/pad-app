import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import EntradasHome from './Entradas/Entradas';
import LinksHome from './Links/Links';
import startMainTabs from './../../screens/MainTabs/startMainTabs';
import { connect } from 'react-redux';
import { addUrl } from './../../../store/actions/DontpadActions';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {url: ''};
  }

  handlerInputUrl = (val) => {
    this.setState({url: val});
  }

  onInsertUrlHandler = () => {
    const url = this.state.url[this.state.url.length - 1] === '/' ? this.state.url : this.state.url + '/';
    this.props.onAddUrl(url);
    this.iniciaTabs()
  }

  iniciaTabs = () => {
    startMainTabs();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.entradas}>
          <EntradasHome inputUrl={this.handlerInputUrl} acessa={this.onInsertUrlHandler} val={this.state.url} />
        </View>
        <View style={styles.footer}>
          <LinksHome />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  entradas: {
    flex: 7,
    width: '85%',
  },
  footer: {
    flex: 1,
    width: '85%',
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUrl: (url) => dispatch(addUrl(url)),
  };
};

export default connect(null, mapDispatchToProps) (Home);