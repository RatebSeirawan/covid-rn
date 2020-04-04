import React from 'react';
import {View, StyleSheet} from 'react-native';
import Map from './Components/map-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 16,
  },
});

export default ({}) => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
};
