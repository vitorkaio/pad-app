import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class HomeScreen extends React.Component {

  static navigatorStyle = {
    navBarHidden: true, // make the nav bar hidden
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Dontpad++</Text>
        <View style={styles.entradas}>
          <TextInput underlineColorAndroid="transparent"
           placeholder='Digite uma url...' 
           style={styles.entradaUrl} />
            <TouchableOpacity style={styles.botoes}>
              <View style={styles.botaoUrl}>
                <Text style={styles.botaoTexto}>Acessar</Text>
              </View>
            </TouchableOpacity>
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
  title: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  entradas: {
    width: '85%',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entradaUrl: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#ebebeb",
    backgroundColor: '#fafafa',
    padding: 20,
  },
  botoes: {
    marginTop: 18,
    width: '90%'
  },
  botaoUrl: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'coral',
  },
  botaoTexto: {
    textAlign: 'center',
    color: 'coral',
    fontWeight: 'bold'
  }
});
