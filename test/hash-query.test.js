const test = QUnit.test;
QUnit.module('Hash query test');

// const SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather';
// const API_KEY = 'e631afcf2a6665bac805e9fc388a6389';

function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('APPID', 'e631afcf2a6665bac805e9fc388a6389');
    return searchParams.toString();
}


test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const q = 'London';
    //act
    const query = writeSearchToQuery(existingQuery, q);
    //assert
    assert.equal(query, 'q=London&APPID=e631afcf2a6665bac805e9fc388a6389');
});