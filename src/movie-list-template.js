export default function movieListTemplate(movieList) {
    const html = ` 
        <li>
            <a href="${movieList.url}">${movieList.title} (${movieList.year})</a>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}
