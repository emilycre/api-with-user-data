import loadHeader from './header-component.js';

loadHeader();

const query = encodeURIComponent('London');
const API_KEY = 'e631afcf2a6665bac805e9fc388a6389';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=${query}&api_key=${API_KEY}';

fetch(url)
    .then(res => res.json())
