const baseUrl = 'https://api.chucknorris.io';

export const getCategories = () => {
    return fetch(`${baseUrl}/jokes/categories`)
        .then(response => response.json());
}

export const getRandomJoke = category => {
    return fetch(`${baseUrl}/jokes/random?category=${category}`)
        .then(response => response.json());
}