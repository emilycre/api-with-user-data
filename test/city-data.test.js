import './html-equal.js';

const test = QUnit.test;
QUnit.module('Create city template');

function createCityTemplate(data) {
    const html = /*html*/ `
        <ul id="city-data">
            <li>London</li>
            <li>Weather description:</li>
            <li>Temp. Minimum:</li>
            <li>Temp. Maximum:</li>
        </ul>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;    
}

test('city template will match HTML', assert => {
    //arrange
    const data = {
        "coord":{"lon":-0.13,"lat":51.51},
        "weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],
        "base":"stations",
        "main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},
        "visibility":10000,
        "wind":{" speed":4.1,"deg":80},
        "clouds":{"all":90},
        "dt":1485789600,
        "sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},
        "id":2643743,
        "name":"London",
        "cod":200
    };
    //act
    const result = createCityTemplate(data);
    //assert
    assert.htmlEqual(result, /*html*/ `
        <ul id="city-data">
            <li>London</li>
            <li>Weather description:</li>
            <li>Temp. Minimum:</li>
            <li>Temp. Maximum:</li>
        </ul>
    `);
});