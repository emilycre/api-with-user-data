import loadHeader from './header-component.js';
import writeSearchToQuery, { readFromQuery } from './hash-query.js';
import './search-component.js';
import updateQ from './search-component.js';
import makeSearchUrl from './make-url.js';
import createCityTemplate from './create-city-template.js';
import { usersRef, favoritesByUserRef, auth } from './firebase.js';

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
    const favorite = dom.querySelector('.favorite');

    favorite.addEventListener('click', () => {
        const userId = auth.currentUser.uid;
        const userFavoriteCityRef = favoritesByUserRef.child(userId);
        if(favorite) {
            userFavoriteCityRef.remove();
            removeFavorite();
        }
        else {
            userFavoriteCityRef.set({
                name: data.name,
                description: data.weather[0].description,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max
            });
            addFavorite();
        }
    })
    cityData.appendChild(dom);
}

function clearCity() {
    while(cityData.children.length > 0) {
        cityData.lastElementChild.remove();
    }
}