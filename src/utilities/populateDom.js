import elements from './elements';


const populateInfo = (temp, feelsLike, tempMin, tempMax, humidity, lon, lat) => {
  const { mainContainer } = elements.el();

  const cityDetails = document.createElement('div');
  cityDetails.innerHTML = `
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <ul class="text-gray-700 text-base">
      <li>Temperature: ${temp}</li>
      <li>Feels Like: ${feelsLike}</li>
      <li>Min: ${tempMin}</li>
      <li>Max: ${tempMax}</li>
    </ul>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Humidity: ${humidity}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Lon: ${lon}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Lat: ${lat}</span>
  </div>
</div>
  `;

  mainContainer.appendChild(cityDetails);
};

export default { populateInfo };