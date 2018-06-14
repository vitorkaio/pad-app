import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './../Toolbar/Toolbar';
import TextArea from './../../components/TextArea/TextArea';

class TextoScreen extends React.Component {

  static navigatorStyle = {
    navBarHidden: true, // make the nav bar hidden
  };

  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <View style={styles.secao}>
          <TextArea />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  secao: {
    flex: 1,
    width: '100%',
  }
});

export default TextoScreen;