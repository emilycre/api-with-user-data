const test = QUnit.test;

const SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather';
const APPID = 'e631afcf2a6665bac805e9fc388a6389';

function makeSearchUrl(qOptions) {
    const url = new URL(SEARCH_URL);
    url.searchParams.set('q', qOptions.q);
    url.searchParams.set('APPID', APPID);
    return url.toString();
}

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