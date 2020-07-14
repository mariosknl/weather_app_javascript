!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(0);var a=()=>({mainContainer:document.getElementById("content"),citySearch:document.getElementById("citySearch"),searchForm:document.getElementById("searchForm"),celcBtn:document.getElementById("celcius-btn"),fahrBtn:document.getElementById("fahr-btn"),cityInfo:document.getElementById("cityInfo"),bodyHtml:document.getElementById("bodyHtml"),loading:document.querySelector(".loading")});var r=async(e,t="metric")=>{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&appid=8f42a5917bc9ff902a037047b57324f4`);return await n.json()},i=async(e,t,n,a="metric")=>{const r=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&units=${a}&appid=${n}`);return await r.json()};var o=e=>{const{bodyHtml:t}=a();switch(e){case"Clouds":t.classList="cloudyBg bgImgProperties h-full";break;case"Clear":t.classList="clearBg bgImgProperties h-full";break;case"Sunny":t.classList="sunBg bgImgProperties h-full";break;case"Thunderstorm":t.classList="stormBg bgImgProperties h-full";break;case"Rain":t.classList="rainyBg bgImgProperties h-full";break;case"Snowy":t.classList="snowBg bgImgProperties h-full";break;default:t.classList="mainBg bgImgProperties h-full"}};var s=(e,t,n,r,i,s,l,c,d)=>{const{mainContainer:u,cityInfo:m}=a(),p=m||document.createElement("div");p.classList="flex justify-center align-middle",p.innerHTML=`\n  <div class="max-w-lg rounded overflow-hidden shadow-lg">\n  <div class="px-6 py-4 text-center bg-gray-100 bg-opacity-25" id="cityInfo">\n    <div class="font-bold text-xl mb-2 text-center">${e}</div>\n    <div class="flex mb-4 justify-center align-middle">\n      <div class="bg-gray-200 mr-6 rounded">\n        <p class="border-b-2">Weather: </p>\n        <p class="border-b-2">Temperature: </p>\n        <p class="border-b-2">Feels Like: </p>\n        <p class="border-b-2">Min Temperature: </p>\n        <p">Max Temperature: </p>\n      </div>\n      <div>\n        <p>${t}</p>\n        <p>${n}&deg</p>\n        <p>${r}&deg</p>\n        <p>${i}&deg</p>\n        <p>${s}&deg</p>\n      </div>\n  </div>\n  <div class="px-6 py-4 mx-auto">\n    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Humidity: ${l}&#37</span>\n    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Lon: ${c}</span>\n    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Lat: ${d}</span>\n  </div>\n</div>\n  `,u.appendChild(p),o(t)};var l={temp:{celsius:!0,city:" "}};var c=async e=>{const{loading:t}=a();t.classList.remove("opacity-0");const n=!0===l.temp.celsius?"metric":"imperial";r(e,n).then(e=>{s(e.name,e.weather[0].main,e.main.temp,e.main.feels_like,e.main.temp_min,e.main.temp_max,e.main.humidity,e.coord.lon,e.coord.lat)}).catch(()=>{alert("City does not exist or cannot be found")}),t.classList.add("opacity-0")};var d=async e=>{e.preventDefault();const{citySearch:t}=a();l.temp.city=t.value,c(t.value)};var u=e=>{"celcius-btn"===e.target.id?l.temp.celsius=!0:l.temp.celsius=!1,c(l.temp.city)};var m=async(e="8f42a5917bc9ff902a037047b57324f4")=>{navigator.geolocation.getCurrentPosition(async t=>{const{loading:n}=a();n.classList.remove("opacity-0");const r=!0===l.temp.celsius?"metric":"imperial",o=await i(t.coords.latitude,t.coords.longitude,e,r),{name:c}=o;l.temp.currentCity=c,s(o.name,o.weather[0].main,o.main.temp,o.main.feels_like,o.main.temp_min,o.main.temp_max,o.main.humidity,o.coord.lon,o.coord.lat),n.classList.add("opacity-0")})};(()=>{const{mainContainer:e,bodyHtml:t}=a();t.classList="h-full mainBg bgImgProperties",e.innerHTML='\n  <div class="mx-auto pt-16 w-full max-w-xs mb-12">\n    <form class="bg-white bg-blue-100 bg-opacity-50 rounded shadow-md px-8 pt-6 pb-8 mb-4 text-center" id="searchForm">\n      <div class="mb-4">\n      <p class="loading">Loading</p>\n      <label class="block text-gray-700 text-sm font-bold mb-2 for="citySearch">\n      Write your city and get its current temperature.\n      </label>\n      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="citySearch" type="text">\n      </div>\n    </form>\n    <div class="mx-auto w-full max-w-xs flex justify-center">\n      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-1 rounded-full" id="celcius-btn">Celcius</button>\n      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-1 rounded-full" id="fahr-btn">Farhneit</button>\n    </div>\n  </div>\n  ';const{celcBtn:n,fahrBtn:r}=a();document.getElementById("searchForm").addEventListener("submit",d),n.addEventListener("click",u),r.addEventListener("click",u)})(),m()}]);