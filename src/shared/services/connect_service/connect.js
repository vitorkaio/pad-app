const io = require('socket.io-client');

class ConnectService {

  constructor() {
    console.log('Objeto criado!');
    this.number = 0;
  }

  static connect() {
    return new Promise((resolve, reject) => {
      this.socket = io.connect("http://localhost:3001", { reconnection: false });
      this.socket.on('connect', (res) => {
        resolve(true);
      });
    });
  }

  static getId(info) {
    this.socket.emit('setId', JSON.stringify(info));
    return new Promise((resolve, reject) => {
      this.socket.on('getId', (res) => {
        resolve(JSON.parse(res));
      });
      // Fica escutando pra vê se tem algum erro.
      this.socket.on("connect_error", (err) => {
        reject(err);
      });
    });
  }

  static disconnect() {
    this.socket.disconnect();
  }

}

export default ConnectService;