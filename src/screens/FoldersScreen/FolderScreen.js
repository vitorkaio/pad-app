import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FolderScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Folder Screen</Text>
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

export default FolderScreen;