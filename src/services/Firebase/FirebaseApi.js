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

  // Retorna um pad da rota.
  static getPad(url) {
    const rota = this.buildUrl(url);
    console.log(rota);
    return new Observable(obs => {
      fireUser.orderByKey().equalTo(rota).on('value', snap => {
        const res = snap.val();
        if(res === null)
          obs.next(res);
        else {
          let dados = {
            url: url,
            texto: '',
            arqs: null,
            links: null,
            senha: ''
          };
          // console.log(res[Object.keys(res)[0]]);
          dados.texto = res[Object.keys(res)[0]].texto;
          dados.arqs = res[Object.keys(res)[0]].arqs;
          dados.senha = res[Object.keys(res)[0]].senha;
          obs.next(dados);
        }
      }, (errorObject) => {
        obs.error('null');
      });
    });

  }

  // Retorna todos os links de uma url, filhos direto da url.
  static getRotaLinks(url) {
    // console.log('**** getRotaLinks ****', '\n\n');
    let linkPai = this.buildUrl(url);
    let links = [];

    return new Promise((resolve, reject) => {
      fireUser.orderByKey().startAt(linkPai).on('value', snap => {
        if (snap.val() !== null) {
          Object.keys(snap.val()).forEach(el => {
            if (el.startsWith(linkPai)) {
              let listaLinks = el.split(linkPai);
              // console.log(linkPai, listaLinks, listaLinks.length);
              if (listaLinks.length > 2)
                ;
              else {
                if (listaLinks[1].split(sep).length > 2 || listaLinks[1].length === 0)
                  ;
                else
                  links.push(url + listaLinks[1]);
              }
            }
          });
          if (links.length > 0)
            resolve(links);
          else
            resolve(false);
          // console.log(links);
        }

      }, (errorObject) => {
        reject(null);
      });

    });

    // console.log('\n', '**** END getRotaLinks ****', '\n');
  }

  // Posta um texto na url passada.
  static postRotaTexto(url, texto) {
    const rota = this.buildUrl(url);
    console.log('postRotaTexto', texto, rota);
    return new Promise((resolve, reject) => {
      const fire = Firebase.database().ref().child(`rotas/${rota}/texto`);
      fire.set(texto, erro => {
        if (erro === false)
          resolve(false);
      });
      resolve(true);
    });
  }

}// Fim da classe

export default FirebaseApi;
