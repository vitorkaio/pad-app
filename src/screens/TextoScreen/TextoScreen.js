import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './../Toolbar/Toolbar';
import TextArea from './../../components/TextArea/TextArea';
import FirebaseApi from './../../services/Firebase/FirebaseApi';

class TextoScreen extends React.Component {

  static navigatorStyle = {
    navBarHidden: true, // make the nav bar hidden
  };

  constructor(props) {
    super(props);

    this.state = {texto: ''};
    this.subsObs = null;
  }

  componentDidMount() {
    this.subsObs = FirebaseApi.getPadTexto('avicii/musicas/').subscribe(this.listenerObsFirebaseText());
  }

  listenerObsFirebaseText = () => {
    const obs = {
      next: (val) => {
        this.setState({texto: val});
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {

      }
    }
    return obs;
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <View style={styles.secao}>
          <TextArea texto={this.state.texto} />
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