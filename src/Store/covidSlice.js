import {createSlice} from '@reduxjs/toolkit';
import Covid from '@API/covid';

export const slice = createSlice({
  name: 'covid',
  initialState: {
    loading: {
      overview: true,
      hopikins: true,
      countries: true,
      country: false,
      filter: false,
    },
    overview: null,
    hopikins: null,
    countries: null,
    country: null,
    filter: 'cases',
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading[action.payload.name] = action.payload.value;
    },
    setOverview: (state, action) => {
      state.overview = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setHopikins: (state, action) => {
      state.hopikins = action.payload;
    },
  },
});

export const {
  setOverview,
  setHopikins,
  setCountries,
  setLoading,
  setCountry,
  setFilter,
} = slice.actions;

export const getOverview = async (dispatch) => {
  dispatch(setLoading({name: 'overview', value: true}));
  const overview = await Covid.getAll();
  dispatch(setOverview(overview));
  dispatch(setLoading({name: 'overview', value: false}));
};

export const getHopikins = async (dispatch) => {
  dispatch(setLoading({name: 'hopikins', value: true}));
  const hopikins = await Covid.getHopikins();
  dispatch(setHopikins(hopikins));
  dispatch(setLoading({name: 'hopikins', value: false}));
};

export const getCountries = async (dispatch) => {
  dispatch(setLoading({name: 'countries', value: true}));
  const payload = await Covid.getCountries();
  dispatch(setCountries(payload));
  dispatch(setLoading({name: 'countries', value: false}));
};

export const getCountry = (country) => async (dispatch, getState) => {
  dispatch(setLoading({name: 'country', value: true}));
  try {
    const payload = await Covid.getByCountry(country);
    dispatch(setCountry(payload));
  } catch (err) {
    const countries = getState().covid.countries;
    const result = countries.find((e) => e.country === country);
    dispatch(setCountry(result));
  } finally {
    dispatch(setLoading({name: 'country', value: false}));
  }
};

export const getCountriesFiltered = (filter) => async (dispatch) => {
  dispatch(setLoading({name: 'filter', value: true}));
  const payload = await Covid.getByFilter(filter);
  dispatch(setCountries(payload));
  dispatch(setLoading({name: 'filter', value: false}));
};

export const selectLoading = (name) => (state) => state.covid.loading[name];
export const selectOverview = (state) => state.covid.overview;
export const selectCountries = (state) => state.covid.countries;
export const selectCountry = (state) => state.covid.country;
export const selectQueries = (state) => {
  return [
    {
      title: 'All',
      id: -1,
    },
    ...state.covid.countries.map((e, id) => {
      return {
        title: e.country,
        id,
      };
    }),
  ];
};
export const selectHeatMapData = (state) => {
  return state.covid.hopikins.map((item) => {
    return {
      latitude: parseFloat(item.coordinates.latitude),
      longitude: parseFloat(item.coordinates.longitude),
      weight: parseFloat(item.stats.confirmed),
    };
  });
};

export default slice.reducer;
