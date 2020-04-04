import React, {useState} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux';
import {Autocomplete, Icon} from '@ui-kitten/components';
import {
  selectQueries,
  getCountry,
  getCountries,
  setCountry,
} from '@Store/covidSlice';

const CloseIcon = (style) => <Icon {...style} name="close" />;

const Search = ({}) => {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(queries);

  const dispatch = useDispatch();
  const queries = useSelector(selectQueries);

  const onSelect = ({title}) => {
    setValue(title);
    if (title === 'All') {
      batch(() => {
        dispatch(getCountry(null));
        dispatch(getCountries);
      });
    } else {
      dispatch(getCountry(title));
    }
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(
      queries.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  const clearInput = () => {
    setValue('');
    setData(queries);
    batch(() => {
      dispatch(getCountries);
      dispatch(setCountry(null));
    });
  };

  return (
    <Autocomplete
      label="Search by country"
      placeholder="Place your Text"
      value={value}
      size="large"
      data={data}
      icon={CloseIcon}
      onIconPress={clearInput}
      onChangeText={onChangeText}
      onSelect={onSelect}
    />
  );
};

export {Search, Search as default};
