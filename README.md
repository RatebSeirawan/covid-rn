

# React Native Open Source Project

This project is a [React Native](https://facebook.github.io/react-native/) project that can be used to kickstart a mobile application.

**Built with Hooks**
**Used The Novel Covid API https://corona.lmao.ninja/docs/**

![](covidiot.gif)

## Content

The project contains:

- [React Native](https://facebook.github.io/react-native/) (v**0.62.0**)
- [clear directory layout](#directory-layout) to provide a base architecture for your application
- [React Native Maps](https://github.com/react-native-community/react-native-maps) react-native-maps installed and configured
- [Redux](https://redux.js.org/) (v4.0.5) to help manage state
- [Redux Toolkit](https://redux.js.org/) (v1.3.2) for efficient Redux development
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v6.0.0) to persist the Redux state
- [React Navigation](https://reactnavigation.org/) (v5.1.3)
- [apisauce](https://github.com/infinitered/apisauce) (v1.1.1) to facilitate API calls.
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native
- [module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) configured with React Native to simplify development.
- [Reactotron](https://github.com/infinitered/reactotron) a development tool to inspect your project
- [Reactotron-Redux](https://github.com/infinitered/reactotron-redux) to inspect your redux tree in reactotron
- [@gorhom/animated-tabbar](https://github.com/gorhom/react-native-animated-tabbar#readme) used this beatiful component for bottom navigation bar.
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) a beatiful UI library based on eva-design that supports dark-mode

## Directory layout
```
├── API
|  ├── covid.js
|  ├── index.js
|  └── reddit.js
├── Services
├── Store
|  ├── appSlice.js
|  ├── covidSlice.js
|  ├── index.js
|  └── redditSlice.js
├── Utils
└── Views
   ├── Components
   ├── Constants
   ├── Hooks
   ├── Navigation
   ├── Screens
   └── Theme
```

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn` to install the dependencies with yarn
- or
- `npm install` to install the dependencies with yarn
- run the following steps for your platform

### Android

- only the first time you run the project, you need to generate a debug key with:
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

