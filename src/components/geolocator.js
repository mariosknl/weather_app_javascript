import weatherApi from '../utilities/weatherApi';
import farCelObj from './farCelObj';
import populateForm from '../utilities/populateDom';


const geolocation = async (key = '8f42a5917bc9ff902a037047b57324f4') => {
  navigator.geolocation.getCurrentPosition(async (data) => {
    const temp = farCelObj.temp.celsius;
    const metric = temp === true ? 'metric' : 'imperial';
    const information = await weatherApi.getGeo(data.coords.latitude,
      data.coords.longitude, key, metric);
    const { name } = information;
    farCelObj.temp.currentCity = name;
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
  });
};

export default { geolocation };
