import React, {useMemo, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {useCode, onChange, call} from 'react-native-reanimated';
import {useValues} from 'react-native-redash';
import {useSafeArea} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';
import {AnimatedTabBarItem} from './item';
import tabs from './tabsConfig';

import useTheme from '@Hooks/useTheme';
import {Colors} from '@Theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});

Animated.addWhitelistedNativeProps({
  width: true,
  stroke: true,
  backgroundColor: true,
});

export const AnimatedTabBar = (props) => {
  const {theme} = useTheme();
  const {navigation, duration, easing} = props;

  const {routes, index: navigationIndex, key: navigationKey} = useMemo(() => {
    return props.state;
  }, [props]);
  const safeArea = useSafeArea();
  const [selectedIndex] = useValues([0], []);

  const containerStyle = useMemo(
    () => [
      styles.container,
      {backgroundColor: theme === 'dark' ? Colors.darkMode : Colors.lightMode},
      {
        paddingBottom: safeArea.bottom,
      },
    ],
    [safeArea, theme],
  );

  const getRouteLabel = (route) => {
    const {descriptors} = props;
    const {options} = descriptors[route.key];
    return options.title !== undefined ? options.title : route.name;
  };

  const handleSelectedIndexChange = (index) => {
    const {key, name} = routes[index];
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
    });

    if (!event.defaultPrevented) {
      navigation.dispatch({
        ...CommonActions.navigate(name),
        target: navigationKey,
      });
    }
  };

  useEffect(() => {
    selectedIndex.setValue(navigationIndex);
  }, [navigationIndex, selectedIndex]);

  useCode(
    () =>
      onChange(
        selectedIndex,
        call([selectedIndex], (args) => {
          handleSelectedIndexChange(args[0]);
        }),
      ),
    [selectedIndex],
  );

  return (
    <View style={containerStyle}>
      {routes.map((route, index) => {
        const configs = tabs[route.name];
        const label = getRouteLabel(route);
        return (
          <AnimatedTabBarItem
            key={route.key}
            index={index}
            selectedIndex={selectedIndex}
            label={label}
            duration={duration}
            easing={easing}
            {...configs}
          />
        );
      })}
    </View>
  );
};
