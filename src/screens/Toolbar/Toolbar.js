import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import startSingleScreen from './../SingleScreen/startSingleScreen';


class Toolbar extends React.Component {

  static navigatorStyle = {
    navBarHidden: true, // make the nav bar hidden
  };

  navigateToHome = () => {
    startSingleScreen();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.home} onPress={this.navigateToHome}>
          <Icon size={30} name="md-home" color="white" />
        </TouchableOpacity>
        <View style={styles.acessoUrl}>
          <TextInput underlineColorAndroid="transparent" style={styles.acessoEntrada} placeholder='teste' />
          <Icon size={30} name="md-arrow-forward" color="black" style={{marginRight: 6}} />
        </View>
        <View style={styles.favorite}>
          <Icon size={30} name="ios-star-outline" color="white" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'turquoise',
    height: 56,
    width: '100%'
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acessoUrl: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  acessoEntrada: {
    padding: 9,
    width: '86%',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  favorite: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Toolbar;