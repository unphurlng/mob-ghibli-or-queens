import { detailTemplate } from '../src/detail-template.js';
const test = QUnit.test;

QUnit.module('TEMPLATE TEST');

const movie = {
    title: 'Castle In The Sky',
    release_date: 1986,
    description: 'hi',
    director: 'bye'
};


test('dynamically populate the DDs', assert => {
    //arrange
    const expected = `
    <dl>
        <span>
            <dt>Title:</dt>            
            <dd>Castle In The Sky</dd>
        </span>
        <span>
            <dt>Year Released</dt>
            <dd>1986</dd>
        </span>
        <span>
            <dt>Description</dt>
            <dd>hi</dd>
        </span>
        <span>
            <dt>Director</dt>
            <dd>bye</dd>
        </span>
    </dl>
    `;
    //act
    const result = detailTemplate(movie);
    //assert
    assert.htmlEqual(result, expected);
});