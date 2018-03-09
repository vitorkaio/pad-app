import React, { Component } from 'react';
import { Conteudo, BotoesSections } from './testeStyle';
import { Button } from 'semantic-ui-react'
import ConnectServer from './../../services/connect/connect';

class TesteComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {'id': null};
  }

  connectar = () => {
    if(this.state.id === null) {
      ConnectServer.connect().then(res => {
        if(res === true) {
          console.log('Conectado!');
          ConnectServer.getId({nome: 'Vih', coord: {lat: 200, lon: 300}}).then(dados => {
            console.log(dados[Object.keys(dados)[0]]);
            this.setState({id: Object.keys(dados)[0]});
          }).catch(err => {
            console.log(err);
            this.setState({id: null});
          });
        }
      });
    }
  }

  desconectar = () => {
    ConnectServer.disconnect();
    this.setState({id: null});
  }

  render() {
    return(
      <Conteudo>
        <BotoesSections>
          <Button color='purple' size='big' 
            onClick={this.connectar} disabled={this.state.id !== null ? true : false}>Conectar</Button>
          <Button color='red' size='big' 
            onClick={this.desconectar} disabled={this.state.id === null ? true : false}>Desconectar</Button>
        </BotoesSections>
        <span>{this.state.id}</span>
      </Conteudo>
    );
  }

}// Fim do componente.

export default TesteComponent;