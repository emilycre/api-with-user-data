import makeSearchUrl from '../src/make-url.js';

const test = QUnit.test;

const SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather';
const APPID = 'e631afcf2a6665bac805e9fc388a6389';

test('url includes q options', assert => {
    //arrange
    const qOptions = {
        q: 'Portland'
    };

    const expected = 'https://api.openweathermap.org/data/2.5/weather?q=Portland&APPID=e631afcf2a6665bac805e9fc388a6389'
    //act
    const url = makeSearchUrl(qOptions);
    //assert
    assert.equal(url, expected);
});