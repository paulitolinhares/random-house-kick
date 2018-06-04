const baseUrl = 'https://api.chucknorris.io';

export const getCategories = () => {
    fetch(`${baseUrl}/jokes/categories`)
        .then((response) => console.log(response));
}

export const getRandomJoke = category => {
    fetch(`${baseUrl}/jokes/random?category=${category}`)
        .then((response) => console.log(response));
}