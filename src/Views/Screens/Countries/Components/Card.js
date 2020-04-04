import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  Text,
  Card as _Card,
  Tooltip,
  ListItem,
  Icon,
  Button,
  Divider,
} from '@ui-kitten/components';

const styles = StyleSheet.create({
  headerContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flag: {
    width: 32,
    height: 22,
    marginRight: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
});

const ExtraInfo = ({style, text}) => {
  const [visible, setVisible] = React.useState(false);

  const toggleTooltip = () => {
    setVisible(!visible);
  };

  if (text === '0' || !text) {
    return null;
  }

  return (
    <Tooltip
      {...style}
      visible={visible}
      text={`Per 1 Million: ${text}`}
      textStyle={{fontSize: 16, fontWeight: '500'}}
      onBackdropPress={toggleTooltip}>
      <Button
        {...style}
        onPress={toggleTooltip}
        appearance="ghost"
        size="large"
        status="danger"
        icon={(st) => <Icon {...st} name="alert-triangle" />}
      />
    </Tooltip>
  );
};

const Header = ({item}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <Image
          source={{uri: item?.countryInfo?.flag}}
          style={styles.flag}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <Text category="h5">{item?.country}</Text>
      </View>
      <View>
        {item?.recovered ? (
          <Text category="s2">{`Recovered: ${item?.recovered?.toLocaleString()}`}</Text>
        ) : null}
        {item?.critical ? (
          <Text category="s2">{`Critical: ${item?.critical?.toLocaleString()}`}</Text>
        ) : null}
      </View>
    </View>
  );
};

const Card = ({item}) => {
  return (
    <_Card
      disabled={true}
      style={{marginBottom: 8}}
      header={() => <Header {...{item}} />}
      status="warning">
      <View style={{marginHorizontal: -24, marginTop: -16, marginBottom: -8}}>
        <ListItem
          disabled={true}
          title={`Total Cases: ${item?.cases?.toLocaleString()}${
            item?.active
              ? '\nActive Cases: ' + item?.active?.toLocaleString()
              : ''
          }`}
          description={
            item?.todayCases
              ? `New Case: +${item?.todayCases?.toLocaleString()}`
              : ''
          }
          icon={(style) => <Icon {...style} name="person" />}
          accessory={
            item?.casesPerOneMillion
              ? (style) => (
                  <ExtraInfo
                    style={style}
                    text={item?.casesPerOneMillion?.toLocaleString()}
                  />
                )
              : null
          }
        />
        {item?.deaths ? (
          <>
            <Divider />
            <ListItem
              disabled={true}
              title={`Total Deaths: ${item?.deaths?.toLocaleString()}`}
              description={
                item?.todayDeaths
                  ? `Today's Deaths: +${item?.todayDeaths?.toLocaleString()}`
                  : ''
              }
              icon={(style) => <Icon {...style} name="person-delete" />}
              accessory={
                item?.deathsPerOneMillion
                  ? (style) => (
                      <ExtraInfo
                        style={style}
                        text={item?.deathsPerOneMillion?.toLocaleString()}
                      />
                    )
                  : null
              }
            />
          </>
        ) : null}
      </View>
    </_Card>
  );
};

export {Card, Card as default};
