import React, {useRef} from 'react';
import {ButtomTabs} from '@Constants/Routes';

import {Icon} from 'react-native-eva-icons';
import {Colors} from '@Theme/Colors';

const _default = ({route, focused, size}) => {
  const defaultProps = {width: size, height: size};

  const ref = useRef();
  if (ref.current) {
    if (focused) {
      ref.current.startAnimation();
    } else {
    }
  }

  const Selector = () => {
    switch (route.name) {
      case ButtomTabs.Overview:
        return focused
          ? {name: 'activity', fill: Colors.primaryDarker}
          : {name: 'activity', fill: Colors.primaryLighter};
      default:
        return focused
          ? {name: 'github', fill: Colors.primaryDarker}
          : {name: 'github', fill: Colors.primaryLighter};
    }
  };

  return <Icon ref={ref} {...Selector()} {...defaultProps} animation="pulse" />;
};

export {_default as TabIcon};
export default _default;
