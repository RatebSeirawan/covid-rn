import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
};

export const WATCH_GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
  distanceFilter: 15,
  interval: 6000,
};

export const ASPECT_RATIO = width / height;
export const LATITUDE = 52.520008;
export const LONGITUDE = 13.404954;
export const LATITUDE_DELTA = 0.0922 * 10;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export const SPACE = 0.01;
