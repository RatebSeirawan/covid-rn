import React, {useEffect, useCallback} from 'react';
import {StyleSheet, ScrollView, View, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Layout, Text, Spinner, Card, CardHeader} from '@ui-kitten/components';
import {getOverview, selectOverview, selectLoading} from '@Store/covidSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 32,
  },
  card: {
    marginVertical: 8,
    alignSelf: 'stretch',
    marginBottom: 18,
  },
});

export default ({}) => {
  const dispatch = useDispatch();
  const overview = useSelector(selectOverview);
  const loading = useSelector(selectLoading('overview'));

  const fetchData = useCallback(async () => {
    dispatch(getOverview);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return !loading && overview ? (
    <Layout style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchData} />
        }>
        <View style={styles.content}>
          <View style={{alignItems: 'center', marginBottom: 12}}>
            <Text category="h6">COVID-19 CORONAVIRUS OUTBREAK</Text>
            <Text category="s1">{`Last update: ${new Date(
              overview.updated,
            ).toUTCString()}`}</Text>
          </View>

          <Card
            style={styles.card}
            header={() => <CardHeader title="Total Confirmed" />}
            status="basic">
            <Text category="h5">{(overview?.cases).toLocaleString()}</Text>
          </Card>
          <Card
            style={styles.card}
            header={() => <CardHeader title="Active Cases" />}
            status="warning">
            <Text category="h5">{(overview?.active).toLocaleString()}</Text>
          </Card>
          <Card
            style={styles.card}
            header={() => <CardHeader title="Total Recovered" />}
            status="success">
            <Text category="h5">{(overview?.recovered).toLocaleString()}</Text>
          </Card>
          <Card
            style={styles.card}
            header={() => <CardHeader title="Total Deaths" />}
            status="danger">
            <Text category="h5">{(overview?.deaths).toLocaleString()}</Text>
          </Card>
        </View>
      </ScrollView>
    </Layout>
  ) : (
    <Layout style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Spinner size="large" />
    </Layout>
  );
};
