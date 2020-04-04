import React from 'react';
import {Marker} from 'react-native-maps';
import {Icon} from '@ui-kitten/components';
import {Colors} from '@Theme/Colors';

export default ({coordinate}) => {
  return coordinate ? (
    <Marker coordinate={coordinate} title="My Location">
      <Icon name="close" color={Colors.primary} style={{fontSize: 38}} />
    </Marker>
  ) : null;
};
