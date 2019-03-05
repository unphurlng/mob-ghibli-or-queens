import { movieListTemplate } from '../src/movie-list-template.js';
const test = QUnit.test;

QUnit.module('MOVIE LIST TEST');

const movieList = {
    url: 'google.com',
    title: 'Castle In The Sky',
    release_date: 1986
};

test('dynamically generated movie list', assert => {
    // arrange
    const expected = ` 
        <li>
            <a href="google.com">Castle In The Sky (1986)</a>
        </li>
    `;

    // act
    const result = movieListTemplate(movieList);

    // assert
    assert.htmlEqual(result, expected);
});