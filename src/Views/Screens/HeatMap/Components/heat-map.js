import React from 'react';
import {Heatmap} from 'react-native-maps';
import {Colors} from '@Theme/Colors';
import {useSelector} from 'react-redux';
import {selectHeatMapData} from '@Store/covidSlice';
import reactotron from 'reactotron-react-native';

const HeatMap = ({}) => {
  const res = useSelector(selectHeatMapData);
  const [points] = React.useState(
    res.filter((e) => {
      return e?.latitude && e?.longitude && e?.weight;
    }),
  );
  return (
    points && (
      <Heatmap
        points={points}
        opacity={0.6}
        radius={50}
        gradient={{
          colors: [
            Colors.dangerLighter,
            Colors.dangerLighter,
            Colors.dangerLighter,
            Colors.dangerLighter,
            Colors.dangerLighter,
          ],
          startPoints: [0.01, 0.25, 0.5, 0.75, 1],
          colorMapSize: 100,
        }}
        gradientSmoothing={10}
        heatmapMode={'POINTS_DENSITY'}
      />
    )
  );
};

export {HeatMap, HeatMap as default};
