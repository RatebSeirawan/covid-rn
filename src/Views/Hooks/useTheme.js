import {useSelector} from 'react-redux';
import {selectTheme} from '@Store/appSlice';

export default () => {
  const theme = useSelector(selectTheme);
  return {theme};
};
