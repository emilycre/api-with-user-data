import loadHeader from './header-component.js';
import writeSearchToQuery, { readFromQuery } from './hash-query.js';
import './search-component.js';
import updateQ from './search-component.js';

loadHeader();

window.addEventListener('hashchange', () => {
    const q = window.location.hash.slice(1);
    const qOptions = readFromQuery(q);
    updateQ(qOptions.q);
});