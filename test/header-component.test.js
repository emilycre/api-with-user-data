import { makeHeader, makeProfile } from '../src/header-component.js';

const test = QUnit.test;
QUnit.module('Create header test');

test('make profile with default avatar', assert => {
    //arrange
    const user = {
        displayName: 'Louise',
        photoUrl: null
    };
    
    const expected = /*html*/ `
    <div id="profile">
        <span id="username">Louise</span>
        <img id="user-icon" src="../assets/user-icon.png" alt="user icon with magnifying glass, and question mark">
        <button>Sign Out</button>
    </div>
    `;
    //act
    const dom = makeProfile(user);
    //assert
    assert.htmlEqual(dom, expected);
});

test('create profile template', assert => {
    //arrange
    const user = {
        displayName: 'Louise',
        photoUrl: './assets/user-icon.png'
    };
    
    const expected = /*html*/ `
    <div id="profile">
        <span id="username">Louise</span>
        <img id="user-icon" src="./assets/user-icon.png" alt="user icon with magnifying glass, and question mark">
        <button>Sign Out</button>
    </div>
    `;
    //act
    const dom = makeProfile(user);
    //assert
    assert.htmlEqual(dom, expected);
});

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