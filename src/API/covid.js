import covid from 'novelcovid';
import {create} from 'apisauce';

const api = create({
  baseURL: 'https://disease.sh',
  headers: {accept: 'application/json'},
});
// https://corona.lmao.ninja/countries?sort=cases
const getAll = () => api.get('/v2/all').then((result) => result.data);
const getHopikins = () => api.get('/v2/jhucsse').then((result) => result.data);
const getCountries = () =>
  api.get('/v2/countries?sort=cases').then((result) => result.data);
const getByCountry = async (country) => {
  const result = await api.get('/v2/countries/' + country).then((r) => r.data);
  if (result.message) {
    throw result.message;
  }
  return result;
};
const getByFilter = (filter) =>
  api.get('/v2/countries?sort=' + filter).then((result) => result.data);

/*  Filters
    default cases
    can be on of
    active | cases | casesPerOneMillion |
    country | critical | deaths |`
    deathsPerOneMillion | recovered | todayCases | todayDeaths
  */

export default {
  getAll,
  getHopikins,
  getCountries,
  getByCountry,
  getByFilter,
};
