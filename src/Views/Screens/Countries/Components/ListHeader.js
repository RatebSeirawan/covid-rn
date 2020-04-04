import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';
import Search from './Search';
import Filters from './Filters';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
  },
});

const ListHeader = ({}) => {
  return (
    <Layout style={styles.container}>
      <View style={{flex: 3}}>
        <Search />
      </View>
      <View style={{width: 40, top: 4}}>
        <Filters />
      </View>
    </Layout>
  );
};

export {ListHeader, ListHeader as default};
