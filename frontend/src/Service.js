const baseUrl = 'http://localhost:3000';

export function getBooks() {
    return fetch(baseUrl + '/books')
        .then(r=>r.json())
        .then(data=>data);
}
