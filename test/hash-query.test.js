import writeSearchToQuery, { readFromQuery } from '../src/hash-query.js';

const test = QUnit.test;
QUnit.module('Hash query test');

test('read search from query', assert => {
    //arrange
    const q = 'q=Seattle&APPID=e631afcf2a6665bac805e9fc388a6389';
    const expected = {
        q: 'Seattle'
    };
    //act
    const queryOptions = readFromQuery(q);
    //assert
    assert.deepEqual(queryOptions, expected);
});

test('write search to existing query', assert => {
    //arrange
    const existingQuery = 'q=London&APPID=e631afcf2a6665bac805e9fc388a6389';
    const q = 'Seattle';
    //act
    const query = writeSearchToQuery(existingQuery, q);
    //assert
    assert.equal(query, 'q=Seattle&APPID=e631afcf2a6665bac805e9fc388a6389');
});

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const q = 'London';
    //act
    const query = writeSearchToQuery(existingQuery, q);
    //assert
    assert.equal(query, 'q=London&APPID=e631afcf2a6665bac805e9fc388a6389');
});