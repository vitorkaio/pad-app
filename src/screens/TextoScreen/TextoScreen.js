import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './../Toolbar/Toolbar';
import TextArea from './../../components/TextArea/TextArea';
import FirebaseApi from './../../services/Firebase/FirebaseApi';
import { connect } from 'react-redux';
import { addPad } from './../../../store/actions/DontpadActions';

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
    this.subsObs = FirebaseApi.getPad(this.props.dontpad.url).subscribe(this.listenerObsFirebaseText());
  }

  listenerObsFirebaseText = () => {
    const obs = {
      next: (val) => {
        FirebaseApi.getRotaLinks(this.props.dontpad.url).then(res => {
          val.links = res;
          console.log(val);
          this.props.onAddPad(val);
        });
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
          <TextArea texto={this.props.dontpad.texto} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPad: (pad) => dispatch(addPad(pad)),
  };
};

const mapStateToProps = (state) => {
  return {
    dontpad: state.dontpadReducer.dontpad,
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (TextoScreen);