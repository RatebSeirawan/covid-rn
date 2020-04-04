import React, {useEffect, useCallback} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Layout, Text, Spinner} from '@ui-kitten/components';
import {getPosts, selectPosts, selectLoading} from '@Store/redditSlice';
import Card from './Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
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
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);

  const fetchData = useCallback(async () => {
    dispatch(getPosts);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return !loading && posts ? (
    <Layout style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchData} />
        }
        ListHeaderComponent={() => (
          <View style={{alignItems: 'center', marginBottom: 22}}>
            <Text category="h6">r/Coronavirus</Text>
          </View>
        )}
        data={posts}
        renderItem={Card}
        keyExtractor={(item, index) => `${index}-reddit-post`}
      />
    </Layout>
  ) : (
    <Layout style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Spinner size="large" />
    </Layout>
  );
};
