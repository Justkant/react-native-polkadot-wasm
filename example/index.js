import { AppRegistry } from 'react-native';
import { uniffiInitAsync } from 'react-native-wasm-crypto-test';
import { name as appName } from './app.json';
import App from './src/App';

uniffiInitAsync().then(() => {
  AppRegistry.registerComponent(appName, () => App);
});
