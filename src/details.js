import loadMovieDetail from './detail-template.js';

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const url = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(url)
    .then(response => response.json())
    .then(result => {
        loadMovieDetail(result);
        console.log(result);
    });

    