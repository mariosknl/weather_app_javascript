import weatherApi from '../utilities/weatherApi';
import populateForm from '../utilities/populateDom';
import farCel from './farCelObj';

const fillFields = async (city) => {
  const metric = farCel.temp.celsius === true ? 'metric' : 'imperial';
  const information = await weatherApi.getWeather(city, metric);
  populateForm.populateInfo(
    information.name,
    information.weather[0].main,
    information.main.temp,
    information.main.feels_like,
    information.main.temp_min,
    information.main.temp_max,
    information.main.humidity,
    information.coord.lon,
    information.coord.lat,
  );
};

export default { fillFields };