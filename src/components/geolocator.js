import weatherApi from '../utilities/weatherApi';
import farCelObj from './farCelObj';
import populateForm from '../utilities/populateDom';
// import elements from '../utilities/elements';

const geolocation = async (key = '8f42a5917bc9ff902a037047b57324f4') => {
  navigator.geolocation.getCurrentPosition(async (data) => {
    const temp = farCelObj.temp.celsius;
    const metric = temp === true ? 'metric' : 'imperial';
    const currentTemp = await weatherApi.getGeo(data.coords.latitude,
      data.coords.longitude, key, metric);
    const { main, name, weather } = currentTemp;
    farCelObj.temp.currentCity = name;
    populateForm.cityDetails(name, main.temp, weather[0].main, weather[0].description, main.tempMax, main.tempMin, main.feelsLike);
  });
};

export default { geolocation };

// name, weather, temp, feelsLike, tempMin, tempMax, humidity, lon, lat