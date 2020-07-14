const el = () => ({
  mainContainer: document.getElementById('content'),
  citySearch: document.getElementById('citySearch'),
  searchForm: document.getElementById('searchForm'),
  celcBtn: document.getElementById('celcius-btn'),
  fahrBtn: document.getElementById('fahr-btn'),
  cityInfo: document.getElementById('cityInfo'),
  bodyHtml: document.getElementById('bodyHtml'),
  loading: document.querySelector('.loading'),
});

export default { el };