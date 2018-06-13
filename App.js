import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/Home/Home';

Navigation.registerComponent('dontpad.HomeScreen', () => HomeScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'dontpad.HomeScreen',
    title: 'Home'
  }
});