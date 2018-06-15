import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const TextArea = (props) => {
  return(
    <View style={styles.textAreaContainer}>
      <TextInput underlineColorAndroid="transparent"
      style={styles.textArea}
      editable={true}
      multiline={true}
      placeholder='Vazio...'
      value={props.texto}
     />
    </View>
  );
};

const styles = StyleSheet.create({
  textAreaContainer: {
    flex: 1,
    padding: 5
  },
  textArea: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    textAlignVertical: 'top'
  }
});

export default TextArea;