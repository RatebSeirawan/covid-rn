import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {selectTheme, setDarkMode, setLightMode} from '@Store/appSlice';
import {Colors} from '@Theme/Colors';

const MenuAction = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const ref = useRef(null);

  return (
    <TopNavigationAction
      {...props}
      onPress={() => {
        dispatch(theme === 'dark' ? setLightMode() : setDarkMode());
        if (ref.current) {
          ref.current.startAnimation();
        }
      }}
      icon={(style) => (
        <Icon
          {...style}
          ref={ref}
          name={theme === 'dark' ? 'sun' : 'moon'}
          animation="pulse"
          width={32}
          height={32}
          fill={theme === 'dark' ? Colors.lightGrey : Colors.lightGrey}
        />
      )}
    />
  );
};

const renderRightControls = () => [<MenuAction />];

export default ({}) => {
  const theme = useSelector(selectTheme);
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'dark' ? Colors.darkMode : Colors.lightMode,
      }}>
      <TopNavigation
        title="Covidiot"
        titleStyle={{fontWeight: '700', fontSize: 24, lineHeight: 24}}
        alignment="center"
        rightControls={renderRightControls()}
      />
    </SafeAreaView>
  );
};
