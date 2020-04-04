import React, {useRef, useState} from 'react';
import {Button, Icon, OverflowMenu} from '@ui-kitten/components';
import {getCountriesFiltered} from '@Store/covidSlice';
import {useDispatch} from 'react-redux';

const data = [
  {
    title: 'Cases',
    filter: 'cases',
  },
  {
    title: 'Deaths',
    filter: 'deaths',
  },
  {
    title: 'New Cases',
    filter: 'todayCases',
  },
  {
    title: 'New Deaths',
    filter: 'todayDeaths',
  },
  {
    title: 'Active',
    filter: 'active',
  },
  {
    title: 'Recovered',
    filter: 'recovered',
  },
  {
    title: 'Critical',
    filter: 'critical',
  },
  {
    title: 'Cases Per One Million',
    filter: 'casesPerOneMillion',
  },
  {
    title: 'Deaths Per One Million',
    filter: 'deathsPerOneMillion',
  },
];

const Filter = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const onItemSelect = (index) => {
    setSelectedIndex(index);
    const filter = data[index].filter;
    dispatch(getCountriesFiltered(filter));
    setMenuVisible(false);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (ref.current) {
      ref.current.startAnimation();
    }
  };

  return (
    <OverflowMenu
      data={data}
      visible={menuVisible}
      selectedIndex={selectedIndex}
      onSelect={onItemSelect}
      onBackdropPress={toggleMenu}>
      <Button
        onPress={toggleMenu}
        appearance="ghost"
        size="large"
        status="info"
        icon={(style) => (
          <Icon ref={ref} animation="zoom" {...style} name="funnel" />
        )}
      />
    </OverflowMenu>
  );
};

export {Filter, Filter as default};
