const test = QUnit.test;

QUnit.module('TEMPLATE TEST');

const movie = {
    title: 'Castle In The Sky',
    year: 1986,
    description: 'hi',
    director: 'bye'
};

function detailTemplate(movie) {
    return `
    <dl>
        <span>
            <dt>Title:</dt>            
            <dd>${movie.title}</dd>
        </span>
        <span>
            <dt>Year Released</dt>
            <dd>${movie.year}</dd>
        </span>
        <span>
            <dt>Description</dt>
            <dd>${movie.description}</dd>
        </span>
        <span>
            <dt>Director</dt>
            <dd>${movie.director}</dd>
        </span>
    </dl>
    `;
} 

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
    assert.equal(result, expected);
});