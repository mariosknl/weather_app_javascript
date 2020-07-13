import elements from './elements';
import getData from '../components/getDataApi';

const inputValue = async (e) => {
  e.preventDefault();
  const { citySearch } = elements.el();
  getData.fillFiels(citySearch.value);
};

export default { inputValue };