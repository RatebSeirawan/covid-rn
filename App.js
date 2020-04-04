import React from 'react';
import {StatusBar} from 'react-native';
import {store, persistor} from '@Store/index';
import {selectTheme} from '@Store/appSlice';
import {Provider, useSelector} from 'react-redux';
import Navigator from '@Src/Views/Navigation/RootNavigator';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {PersistGate} from 'redux-persist/integration/react';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {mapping, light, dark} from '@eva-design/eva';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from '@Theme/Colors';

const darkTheme = {...dark};
const lightTheme = {...light};

const App = () => {
  const theme = useSelector(selectTheme);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? Colors.darkMode : Colors.lightMode}
        animated={true}
      />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        mapping={mapping}
        theme={theme === 'light' ? lightTheme : darkTheme}>
        <Navigator />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
