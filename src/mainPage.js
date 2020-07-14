import elements from './utilities/elements';
import inputValue from './utilities/eventListeners';
import toggleTemp from './components/toggleTemp';

const generate = () => {
  const { mainContainer } = elements.el();
  mainContainer.innerHTML = `
  <div class="mx-auto pt-16 w-full max-w-xs">
    <form class="bg-white bg-blue-100 bg-opacity-75 rounded shadow-md px-8 pt-6 pb-8 mb-4 text-center" id="searchForm">
      <div class="mb-4">
      <p class="loading">Loading</p>
      <label class="block text-gray-700 text-sm font-bold mb-2 for="citySearch">
      Write your city and get its temperature.
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="citySearch" type="text">
      </div>
    </form>
    <div class="mx-auto w-full max-w-xs flex justify-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-1 rounded-full" id="celcius-btn">Celcius</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-1 rounded-full" id="fahr-btn">Farhneit</button>
    </div>
  </div>
  `;
  const { celcBtn, fahrBtn } = elements.el();
  document.getElementById('searchForm').addEventListener('submit', inputValue.inputValue);
  celcBtn.addEventListener('click', toggleTemp.toggleTemp);
  fahrBtn.addEventListener('click', toggleTemp.toggleTemp);
};

export default { generate };