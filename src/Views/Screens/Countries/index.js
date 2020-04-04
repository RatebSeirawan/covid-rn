import React, {useEffect, useCallback} from 'react';
import {StyleSheet, RefreshControl, FlatList} from 'react-native';
import {useSelector, useDispatch, batch} from 'react-redux';
import {Layout, Spinner} from '@ui-kitten/components';
import {
  getCountries,
  selectCountries,
  selectLoading,
  selectCountry,
  setCountry,
} from '@Store/covidSlice';
import {Card, ListHeader} from './Components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 22,
    paddingVertical: 20,
  },
  card: {
    marginVertical: 8,
    alignSelf: 'stretch',
    marginBottom: 18,
  },
});

export default ({}) => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const country = useSelector(selectCountry);
  const loading = useSelector(selectLoading('countries'));

  const fetchData = useCallback(async () => {
    batch(() => {
      dispatch(getCountries);
      dispatch(setCountry(null));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return !loading && countries ? (
    <Layout style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchData} />
        }
        ListHeaderComponent={ListHeader}
        data={country ? [country] : countries}
        renderItem={Card}
        keyExtractor={(item, index) => `${index}-countries`}
      />
    </Layout>
  ) : (
    <Layout style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Spinner size="large" />
    </Layout>
  );
};
