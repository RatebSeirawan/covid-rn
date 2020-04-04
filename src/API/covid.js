import covid from 'novelcovid';
import {create} from 'apisauce';

const api = create({
  baseURL: 'https://corona.lmao.ninja',
  headers: {accept: 'application/json'},
});

const getAll = () => api.get('/all').then((result) => result.data);
const getHopikins = () => api.get('/v2/jhucsse').then((result) => result.data);
const getCountries = () => covid.getCountry({sort: 'cases'});
const getByCountry = async (country) => {
  const result = await covid.getCountry({country: country});
  if (result.message) {
    throw result.message;
  }
  return result;
};
const getByFilter = (country) => covid.getCountry({sort: country});

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
