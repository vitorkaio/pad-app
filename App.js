import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import TextoScreen from './src/screens/TextoScreen/TextoScreen';
import FileScreen from './src/screens/FilesScreen/FileScreen';
import FolderScreen from './src/screens/FoldersScreen/FolderScreen';
import startSingleScreenApp from './src/screens/SingleScreen/startSingleScreen';
import { Provider } from 'react-redux';
import configureStore from './store/config/ConfigStore';

const store = configureStore();

Navigation.registerComponent('dontpad.HomeScreen', () => HomeScreen, store, Provider);
Navigation.registerComponent('dontpad.TextoScreen', () => TextoScreen, store, Provider);
Navigation.registerComponent('dontpad.FileScreen', () => FileScreen, store, Provider);
Navigation.registerComponent('dontpad.FolderScreen', () => FolderScreen, store, Provider);

startSingleScreenApp();