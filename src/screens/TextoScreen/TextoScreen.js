import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './../Toolbar/Toolbar';
import TextArea from './../../components/TextArea/TextArea';
import FirebaseApi from './../../services/Firebase/FirebaseApi';
import { connect } from 'react-redux';
import { addPad } from './../../../store/actions/DontpadActions';
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

class TextoScreen extends React.Component {

  static navigatorStyle = {
    navBarHidden: true, // make the nav bar hidden
  };

  constructor(props) {
    super(props);

    this.state = {atualizaTexto: true};
    
    this.subsObs = null;
    this.texto = null;
    this.subscriptionGetText = null;

    this.entradaRxjs = new Subject();

  }

  componentDidMount() {
    this.subsObs = FirebaseApi.getPad(this.props.dontpad.url).subscribe(this.listenerObsFirebaseText());

    this.subscriptionGetText = this.entradaRxjs.pipe(debounceTime(3000)).pipe(
      distinctUntilChanged((x, y) => {
        if(x === y) {
          // this.icons="save"; 
          this.setState({atualizaTexto: false}); 
          return true;
        } 
        else if(x !== y)
          return false;
      }))
      .subscribe(this.getObsPostText());
  }

  // Observable para o firebase.
  listenerObsFirebaseText = () => {
    const obs = {
      next: (val) => {
        FirebaseApi.getRotaLinks(this.props.dontpad.url).then(res => {
          val.links = res;
          console.log(val);
          this.texto = val.texto;
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

  // Observable para entrada de dados.
  getObsPostText() {
    let obs = {
      next: (data) => {
        FirebaseApi.postRotaTexto(this.props.dontpad.url, data).then(res => {
          // console.log(res);
          if(res === true) {
            // this.icons = 'save';
            this.setState({atualizaTexto: false});
          }
        }).catch(err => {
          console.log(err);
          // this.icons = 'warning';
          // this.tooltip = 'Não foi possível salvar o conteúdo';
          this.setState({atualizaTexto: false});
        })
      },
    };
    return obs;
  }

  textAreaInputHandler = (val) => {
    this.texto = val;
    // console.log(this.texto);
    this.setState({atualizaTexto: true}, () => {
      this.entradaRxjs.next(this.texto);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <View style={styles.secao}>
          <TextArea texto={this.texto === null ? 'Vazio...' : this.texto} inputTextArea={this.textAreaInputHandler} />
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