import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

  // O atributo Icon do objeto tabs do Navigation.startTabBasedApp precisa de um icon.
  // O módulo react-native-vector-icons nos fornece um método Icon.getImageSource que retorna um icone da base de dados.
  // Só que de forma ASYN, temos que colocar uma promise pra sincorinizar e então só executar a tab quando icone tiver pronto.
  Promise.all([
    Icon.getImageSource("md-clipboard", 30),
    Icon.getImageSource("md-document", 30),
    Icon.getImageSource("md-albums", 30)
  ]).then(source => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'dontpad.TextoScreen', // unique ID registered with Navigation.registerScreen
          label: 'Texto', // tab label as appears under the icon in iOS (optional)
          title: 'Texto',    
          icon: source[0],
        },
        {
          screen: 'dontpad.FileScreen', // unique ID registered with Navigation.registerScreen
          label: 'Arquivos', // tab label as appears under the icon in iOS (optional)
          title: 'Arquivos',
          icon: source[1],
        },
        {
          screen: 'dontpad.FolderScreen', // unique ID registered with Navigation.registerScreen
          label: 'Sub-Pastas', // tab label as appears under the icon in iOS (optional)
          title: 'Sub-Pastas',
          icon: source[2],
        }
      ],
      appStyle: {
        tabBarSelectedButtonColor: 'turquoise'
      },
    });

  });

};

export default startTabs;