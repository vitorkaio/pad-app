import { Navigation } from 'react-native-navigation';

const startSingleScreen = () => {

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'dontpad.HomeScreen',
      title: 'Home'
    }
  });

};

export default startSingleScreen;