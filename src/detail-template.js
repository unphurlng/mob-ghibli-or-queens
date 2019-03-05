export function detailTemplate(movie) {
    const html = /*html*/`
    <dl>
        <span>
            <dt>Title:</dt>            
            <dd>${movie.title}</dd>
        </span>
        <span>
            <dt>Year Released</dt>
            <dd>${movie.release_date}</dd>
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

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
} 

const detailContainer = document.getElementById('detail-container');

export default function loadMovieDetail(movie) {
    console.log(movie);
    const dom = detailTemplate(movie);
    detailContainer.appendChild(dom);
}