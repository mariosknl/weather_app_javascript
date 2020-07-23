import farCel from './farCelObj';
import getData from './getDataApi';

const toggleTemp = (e) => {
  if (e.target.id === 'celcius-btn') {
    farCel.temp.celsius = true;
  } else {
    farCel.temp.celsius = false;
  }
  getData.fillFields(farCel.temp.city);
};

export default { toggleTemp };