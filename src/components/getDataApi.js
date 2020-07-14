/* eslint-disable no-alert */
import weatherApi from '../utilities/weatherApi';
import populateForm from '../utilities/populateDom';
import farCel from './farCelObj';
import elements from '../utilities/elements';

const fillFields = async (city) => {
  const { loading } = elements.el();
  loading.classList.remove('opacity-0');
  const metric = farCel.temp.celsius === true ? 'metric' : 'imperial';
  weatherApi.getWeather(city, metric).then((information) => {
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
  }).catch(() => {
    alert('City does not exist or cannot be found');
  });
  loading.classList.add('opacity-0');
};

export default { fillFields };