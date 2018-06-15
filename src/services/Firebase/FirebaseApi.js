import { Observable } from 'rxjs';
import Firebase from './Config/Firebase';

const fireUser = Firebase.database().ref().child('rotas');
const sep = '@@-@3';

class FirebaseApi {

  // Monta a url com o seperador. Retira a / e insere o sep.
  static buildUrl(url) {
    url = url + "";
    return url.split('/').join(sep);
  }

  // Retorna o texto da rota.
  static getPadTexto(url) {
    const rota = this.buildUrl(url);
    console.log(rota);
    return new Observable(obs => {
      fireUser.orderByKey().equalTo(rota).on('value', snap => {
        const res = snap.val();
        // console.log(res[Object.keys(res)[0]].texto);
        obs.next(res[Object.keys(res)[0]].texto);
      }, (errorObject) => {
        obs.error(null);
      });
    });

  }

}// Fim da classe

export default FirebaseApi;
