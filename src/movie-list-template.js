export function movieListTemplate(movieList) {
    const html = /*html*/` 
        <li>
            <a href="${movieList.url}">${movieList.title} (${movieList.release_date})</a>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const movieListContainer = document.getElementById('movie-list');

export default function loadMovieList(movieList) {
    movieList.forEach((movie) => {
        const dom = movieListTemplate(movie);
        movieListContainer.appendChild(dom);
    });
}
