const getWeather = async (city, unit = 'metric') => {
  const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=8f42a5917bc9ff902a037047b57324f4`);
  const data = await result.json();
  return data;
};

const getGeo = async (lat, lon, key, unit = 'metric') => {
  const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`);
  const data = await result.json();
  return data;
};

export default { getWeather, getGeo };
