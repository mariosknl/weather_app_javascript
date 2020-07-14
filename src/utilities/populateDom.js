import elements from './elements';


const populateInfo = (name, weather, temp, feelsLike, tempMin, tempMax, humidity, lon, lat) => {
  const { mainContainer, cityInfo } = elements.el();

  const cityDetails = cityInfo || document.createElement('div');
  cityDetails.classList = 'flex justify-center align-middle';
  cityDetails.innerHTML = `
  <div class="max-w-lg rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4 text-center  bg-blue-200" id="cityInfo">
    <div class="font-bold text-xl mb-2 text-center">${name}</div>
    <div class="flex mb-4 justify-center align-middle">
      <div class="bg-gray-200 mr-6 rounded">
        <p class="border-b-2">Weather: </p>
        <p class="border-b-2">Temperature: </p>
        <p class="border-b-2">Feels Like: </p>
        <p class="border-b-2">Min Temperature: </p>
        <p">Max Temperature: </p>
      </div>
      <div>
        <p>${weather}</p>
        <p>${temp}&deg</p>
        <p>${feelsLike}&deg</p>
        <p>${tempMin}&deg</p>
        <p>${tempMax}&deg</p>
      </div>
  </div>
  <div class="px-6 py-4 mx-auto">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Humidity: ${humidity}&#37</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Lon: ${lon}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Lat: ${lat}</span>
  </div>
</div>
  `;

  mainContainer.appendChild(cityDetails);
};

export default { populateInfo };