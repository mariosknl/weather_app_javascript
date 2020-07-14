import './style.scss';
import mainPage from './mainPage';
import geolocation from './components/geolocator';


const app = () => {
  mainPage.generate();
  geolocation.geolocation();
};

app();
