export default function detailTemplate(movie) {
    const html = /*html*/`
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

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
} 