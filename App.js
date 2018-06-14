import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import TextoScreen from './src/screens/TextoScreen/TextoScreen';
import FileScreen from './src/screens/FilesScreen/FileScreen';
import FolderScreen from './src/screens/FoldersScreen/FolderScreen';

Navigation.registerComponent('dontpad.HomeScreen', () => HomeScreen);
Navigation.registerComponent('dontpad.TextoScreen', () => TextoScreen);
Navigation.registerComponent('dontpad.FileScreen', () => FileScreen);
Navigation.registerComponent('dontpad.FolderScreen', () => FolderScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'dontpad.HomeScreen',
    title: 'Home'
  }
});