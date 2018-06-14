import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const EntradasHome = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.titleTexto}>Dontpad++</Text>
      <View style={styles.entradasAcoes}>
        <TextInput underlineColorAndroid="transparent"
        placeholder='Digite uma url...' 
        style={styles.entradaUrl} />
          <TouchableOpacity style={styles.botoes}>
            <View style={styles.botaoUrl}>
              <Text style={styles.botaoTexto}>Acessar</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleTexto: {
    marginTop: 100,
    fontSize: 55,
    fontFamily: 'Offside-Regular'
  },
  entradasAcoes: {
    marginTop: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});

export default EntradasHome;