import loadHeader from './header-component.js';
import writeSearchToQuery, { readFromQuery } from './hash-query.js';
import './search-component.js';
import updateQ from './search-component.js';
import makeSearchUrl from './make-url.js';
import createCityTemplate from './create-city-template.js';

loadHeader();

window.addEventListener('hashchange', () => {
    const q = window.location.hash.slice(1);
    const qOptions = readFromQuery(q);
    updateQ(qOptions.q);

    const url = makeSearchUrl(qOptions);
    
    fetch(url)
        .then(res => res.json())
        .then(response => {
            loadCity(response);
        }
    )
});

const cityData = document.getElementById('city-data');

function loadCity(city) {
    clearCity();
    const dom = createCityTemplate(city);
    cityData.appendChild(dom);
}

function clearCity() {
    while(cityData.children.length > 0) {
        cityData.lastElementChild.remove();
    }
}