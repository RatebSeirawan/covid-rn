import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabIcon from '@Components/TabIcon';
import AnimatedTabBar from '@Components/BottomTabs';

import Overview from '@Screens/Overview';
import Countries from '@Screens/Countries';
import HeatMap from '@Screens/HeatMap';
import Reddit from '@Screens/Reddit';

import {ButtomTabs} from '@Constants/Routes';

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator
      tabBar={(props) => <AnimatedTabBar {...props} />}
      initialRouteName={ButtomTabs.Overview}
      backBehavior="history"
      lazy={true}
      tabBarOptions={{showIcon: true, showLabel: true}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => (
          <TabIcon {...{focused, size, route}} />
        ),
      })}>
      <Tabs.Screen name={ButtomTabs.Overview} component={Overview} />
      <Tabs.Screen name={ButtomTabs.Countries} component={Countries} />
      <Tabs.Screen name={ButtomTabs.HeatMap} component={HeatMap} />
      <Tabs.Screen name={ButtomTabs.Reddit} component={Reddit} />
    </Tabs.Navigator>
  );
};
