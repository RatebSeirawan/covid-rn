import {ButtomTabs as Routes} from '@Constants/Routes';
import Pallet from '@Theme/Pallet';

export default {
  [Routes.Overview]: {
    labelStyle: {
      color: Pallet['color-primary-500'],
    },
    icon: {
      name: 'activity',
      color: Pallet['color-primary-500'],
    },
    background: {
      activeColor: Pallet['color-primary-100'],
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  [Routes.Countries]: {
    labelStyle: {
      color: Pallet['color-warning-500'],
    },
    icon: {
      name: 'bar-chart-2',
      color: Pallet['color-warning-500'],
    },
    background: {
      activeColor: Pallet['color-warning-100'],
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  [Routes.HeatMap]: {
    labelStyle: {
      color: Pallet['color-success-500'],
    },
    icon: {
      name: 'map',
      color: Pallet['color-success-500'],
    },
    background: {
      activeColor: Pallet['color-success-100'],
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  [Routes.Reddit]: {
    labelStyle: {
      color: Pallet.reddit,
    },
    icon: {
      name: 'reddit',
      type: 'material',
      color: Pallet.reddit,
    },
    background: {
      activeColor: Pallet.redditLighter,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};
