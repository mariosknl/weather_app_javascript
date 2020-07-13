import weatherApi from '../utilities/weatherApi';
import populateForm from '../utilities/populateDom';

const fillFiels = async (city) => {
  const information = await weatherApi.getWeather(city);
  populateForm.populateInfo(
    information.name,
    information.main.temp,
    information.main.feels_like,
    information.main.temp_min,
    information.main.temp_max,
    information.main.humidity,
    information.coord.lon,
    information.coord.lat,
  );
};

export default { fillFiels };