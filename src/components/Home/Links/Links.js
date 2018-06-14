import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const LinksHome = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.links}>
        <TouchableOpacity>
          <Text style={styles.linksTexto}>Como funciona?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.links}>
        <TouchableOpacity>
          <Text style={styles.linksTexto}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linksTexto: {
    fontWeight: 'bold'
  }
});

export default LinksHome;