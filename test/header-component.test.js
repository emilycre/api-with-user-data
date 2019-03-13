import makeHeader from '../src/make-header.js';

const test = QUnit.test;
QUnit.module('Create header test');

test('create header template', assert => {
    //arrange
    const expected = /*html*/ `
    <header>
        <div id="header-container">
            <img id="logo" src="assets/weather-icon.png" alt="weather logo with sun, cloud, lightning, and raindrops">
            <h1>City Weather Search</h1>
        </div>
    </header>
    `;
    //act
    const result = makeHeader();
    //assert
    assert.htmlEqual(result, expected);
});