import loadHeader from './header-component.js';
import { writeSearchToQuery, readFromQuery } from './hash-query.js';

loadHeader();

fetch(url)
    .then(res => res.json())
    .then(response => {
        console.log(response)
    })