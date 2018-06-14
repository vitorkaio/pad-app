import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FileScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>File Screen</Text>
      </View>
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
});

export default FileScreen;