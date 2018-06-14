import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import TextoScreen from './src/screens/TextoScreen/TextoScreen';
import FileScreen from './src/screens/FilesScreen/FileScreen';
import FolderScreen from './src/screens/FoldersScreen/FolderScreen';
import startSingleScreenApp from './src/screens/SingleScreen/startSingleScreen';

Navigation.registerComponent('dontpad.HomeScreen', () => HomeScreen);
Navigation.registerComponent('dontpad.TextoScreen', () => TextoScreen);
Navigation.registerComponent('dontpad.FileScreen', () => FileScreen);
Navigation.registerComponent('dontpad.FolderScreen', () => FolderScreen);

startSingleScreenApp();