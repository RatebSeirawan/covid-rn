import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import url from 'url';
const {hostname} = url.parse(NativeModules.SourceCode.scriptURL);

const reactotron = Reactotron.configure({
  name: 'Covidiot',
  host: hostname,
  port: 9090,
})
  .useReactNative({})
  .use(reactotronRedux())
  .connect();

export default reactotron;
