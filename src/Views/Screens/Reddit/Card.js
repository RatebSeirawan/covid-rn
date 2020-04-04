import React from 'react';
import {Image, StyleSheet, Linking} from 'react-native';
import {Card, Text} from '@ui-kitten/components';
import reactotron from 'reactotron-react-native';

export default ({item, index}) => {
  const {data} = item;
  if (index === 6) {
    reactotron.log({data});
  }

  const redditUrl = `https://www.reddit.com${data?.permalink}`;

  return (
    <Card
      onPress={() => {
        Linking.canOpenURL(redditUrl).then((supported) => {
          if (supported) {
            Linking.openURL(redditUrl);
          } else {
            //
          }
        });
      }}
      header={() => (
        <React.Fragment>
          {data?.thumbnail ? (
            <Image
              style={styles.headerImage}
              source={{
                uri: data?.thumbnail,
              }}
            />
          ) : null}

          <Text style={styles.headerText} category="s1">
            by {data?.author}
          </Text>
        </React.Fragment>
      )}
      style={{marginBottom: 16}}>
      <Text category="h6">{data?.title}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 8,
  },
  headerImage: {
    flex: 1,
    height: 192,
  },
});
