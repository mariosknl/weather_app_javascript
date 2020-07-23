import elements from './elements';
import getData from '../components/getDataApi';
import farCel from '../components/farCelObj';

const inputValue = async (e) => {
  e.preventDefault();
  const { citySearch } = elements.el();
  farCel.temp.city = citySearch.value;
  getData.fillFields(citySearch.value);
};

export default { inputValue };