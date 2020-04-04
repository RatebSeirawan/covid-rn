import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import _MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Spinner, Layout} from '@ui-kitten/components';
import Heatmap from './heat-map';
import {useSelector, useDispatch} from 'react-redux';

import {selectLoading, getHopikins} from '@Store/covidSlice';
import Tracker from './map-tracker';
import permission from './map-permisions';

import {GEOLOCATION_OPTIONS, LATITUDE, LONGITUDE} from './map-constants';

const Zoom = 12;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const MapView = ({}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading('hopikins'));
  const mapView = useRef(null);
  // const [coordinate, setCoordinate] = useState(null);

  useEffect(() => {
    dispatch(getHopikins);
  }, [dispatch]);

  // useEffect(() => {
  //   (async () => {
  //     if (await permission()) {
  //       Geolocation.getCurrentPosition(
  //         (position) => {
  //           setCoordinate({
  //             latitude: parseFloat(position?.coords?.latitude),
  //             longitude: parseFloat(position?.coords?.longitude),
  //             latitudeDelta: Zoom,
  //             longitudeDelta: Zoom,
  //           });
  //         },
  //         (error) => console.log({error}),
  //         GEOLOCATION_OPTIONS,
  //       );
  //     }
  //   })();
  // }, []);
  //
  // const goToInitialLocation = () => {
  //   const initialRegion = Object.assign({}, coordinate);

  //   initialRegion.latitudeDelta = 40;
  //   initialRegion.longitudeDelta = 40;
  //   mapView.current.animateToRegion(initialRegion, 2000);
  // };

  // const goToLocation = (newCoords) => {
  //   const initialRegion = Object.assign({}, newCoords);
  //   initialRegion.latitudeDelta = 0.1;
  //   initialRegion.longitudeDelta = 0.1;
  //   mapView.current.animateToRegion(initialRegion, 1000);
  // };

  return !isLoading ? (
    <_MapView
      style={styles.map}
      loadingEnabled
      provider={PROVIDER_GOOGLE}
      ref={mapView}
      zoomEnabled={true}
      // onMapReady={goToInitialLocation}
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 60,
        longitudeDelta: 60,
      }}>
      <Heatmap />
      {/* <Tracker coordinate={coordinate} /> */}
    </_MapView>
  ) : (
    <Layout style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Spinner size="large" />
    </Layout>
  );
};

export {MapView, MapView as default};
