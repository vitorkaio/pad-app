import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import EntradasHome from './Entradas/Entradas';
import LinksHome from './Links/Links';

class Home extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.entradas}>
          <EntradasHome />
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

export default Home;