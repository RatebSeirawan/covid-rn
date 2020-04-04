if (__DEV__) {
  require('@Root/config/ReactotronConfig');
}

import {AppRegistry, unstable_enableLogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
unstable_enableLogBox();
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
